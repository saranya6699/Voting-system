package com.voting.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.voting.models.AnsweredQuestions;
import com.voting.models.Question;
import com.voting.repositories.AnswersRepository;
import com.voting.repositories.QuestionRepository;
import com.voting.repositories.UserRepository;

@Service
public class QuestionService {
	
	@Autowired
	private QuestionRepository repo;
	
	@Autowired
	private AnswersRepository answers;
	
	public Question createQuestion(Question question) {
		Date date = new Date();
		question.setTimestamp(date);
		return this.repo.save(question);
	}
	
	public List<Question> getQuestionsByUsername(String username) {
		return this.repo.findByUsername(username);
	}
	
	public List<Question> getUnansweredQuestion(String username) {
		List<Integer> answeredQuestions = this.answers.findIdsByUsername(username);
		
		return answeredQuestions.size()>0 ? this.repo.getUnansweredQuestions(answeredQuestions): this.getAllQuestion();
	}
	
	public List<Question> getAllQuestion() {
		return this.repo.findAll();
	}
	
	public void vote(Question question) {
		int count = question.getCount();
		question.setCount(++count);
		int id = question.getId();
		this.repo.updateQuestion(id,count, question.getPositiveCount());
		AnsweredQuestions answered = new AnsweredQuestions(id, question.getUsername());
		this.answers.save(answered);
	}
}
