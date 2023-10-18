package com.cs555.app.communityexploration.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cs555.app.communityexploration.entity.Video;

/**
 * @author Himanshu Dagar
 */
@Repository
public interface VideoRepository extends CrudRepository<Video, Integer> {
	
	
}
