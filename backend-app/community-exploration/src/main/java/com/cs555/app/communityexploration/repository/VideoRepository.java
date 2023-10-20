package com.cs555.app.communityexploration.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cs555.app.communityexploration.entity.Video;

/**
 * @author Himanshu Dagar
 */
@Repository
public interface VideoRepository extends CrudRepository<Video, Integer> {
	
	@Query("select v from Video v")
	public List<Video> findAllVideos();
	
	public List<Video> findByLocation(String location);
}
