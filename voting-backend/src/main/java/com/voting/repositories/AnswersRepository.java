package com.voting.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.voting.models.AnsweredQuestions;

public interface AnswersRepository extends JpaRepository<AnsweredQuestions, Integer> {

	List<AnsweredQuestions> findByUsername(String username);

	@Modifying
	@Query("SELECT questionId from AnsweredQuestions where username=:username")
	List<Integer> findIdsByUsername(@Param("username") String username);
	
}
