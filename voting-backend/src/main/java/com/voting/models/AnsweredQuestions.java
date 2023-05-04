package com.voting.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

@Entity
public class AnsweredQuestions {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "answer_seq")
    @SequenceGenerator(name = "answer_seq", sequenceName = "ANSWER_SEQ", allocationSize = 1)
	private Long id;
	
	private Integer questionId;
	
	private String username;
	

	public AnsweredQuestions() {}
	

	public AnsweredQuestions(Integer questionId, String username) {
		this.questionId = questionId;
		this.username = username;
	}


	public Integer getQuestionId() {
		return questionId;
	}

	public void setQuestionId(Integer questionId) {
		this.questionId = questionId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
}
