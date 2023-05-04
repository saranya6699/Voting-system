package com.voting.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.voting.models.Question;
import com.voting.services.QuestionService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class QuestionsController {
	
	@Autowired
	private QuestionService service;
	
	@GetMapping(path="/")
	public String test() {
		return "App running";
	}
	
	@PostMapping(path="/vote")
	public void vote(@RequestBody Question question) {
		this.service.vote(question);
	}
	
	@PostMapping(path="/question")
	public Question addQuestion(@RequestBody Question question) {
		return this.service.createQuestion(question);
	}
	
	@GetMapping(path="/questions/{username}")
	public List<Question> getQuestionsForUser(@PathVariable String username) {
		return this.service.getUnansweredQuestion(username);
	}
	
	@GetMapping(path = "/questions")
	public List<Question> getAllQuestions() {
		return this.service.getAllQuestion();
	}
}
