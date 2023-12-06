package com.cs555.app.communityexploration.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cs555.app.communityexploration.entity.Video;

/**
 * @author Himanshu Dagar
 */
@Repository
public interface VideoRepository extends JpaRepository<Video, Integer> {

	@Query("select v from Video v")
	public List<Video> findAllVideos();

	public List<Video> findByLocation(String location);
	
	public List<Video> findByVideoId(int videoId);
}
