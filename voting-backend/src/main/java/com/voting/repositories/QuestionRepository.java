package com.voting.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.voting.models.Question;

import jakarta.transaction.Transactional;


@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {
	
	public List<Question> findAll();
	
	public List<Question> findByUsername(String username);
	
	public Question findByText(String text);
	
	@Modifying
	@Transactional
    @Query("UPDATE Question q SET q.count = :count, q.positiveCount = :positiveCount WHERE q.id = :id")
	public void updateQuestion(@Param("id") int id, @Param("count")int count, @Param("positiveCount") int positiveCount);
	
	@Modifying
	@Transactional
	@Query("SELECT q from Question q where q.id NOT IN :qidList")
	public List<Question> getUnansweredQuestions(@Param("qidList") List<Integer> qidList);
}
