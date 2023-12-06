package com.cs555.app.communityexploration.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cs555.app.communityexploration.entity.Comment;

/**
 * @author Himanshu Dagar
 */
@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer> {
	
	@Query("SELECT c FROM Comment c WHERE (:userId IS NULL OR c.userId = :userId) AND (:videoId IS NULL OR c.videoId = :videoId)")
    List<Comment> findCommentsByUserIdAndVideoId(Integer userId, String videoId);
}
