package com.cs555.app.communityexploration.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cs555.app.communityexploration.contract.request.PostCommentRequest;
import com.cs555.app.communityexploration.contract.request.PostVideoRequest;
import com.cs555.app.communityexploration.contract.response.GetCommentResponseDTO;
import com.cs555.app.communityexploration.contract.response.GetCommentsResponseDTO;
import com.cs555.app.communityexploration.contract.response.GetVideoResponseDTO;
import com.cs555.app.communityexploration.contract.response.GetVideosResponseDTO;
import com.cs555.app.communityexploration.contract.response.PostCommentResponseDTO;
import com.cs555.app.communityexploration.contract.response.PostVideoResponseDTO;
import com.cs555.app.communityexploration.contract.response.VideoInfoDTO;
import com.cs555.app.communityexploration.contract.response.base.ErrorDTO;
import com.cs555.app.communityexploration.entity.Comment;
import com.cs555.app.communityexploration.entity.Video;
import com.cs555.app.communityexploration.enumeration.ErrorResponseEnum;
import com.cs555.app.communityexploration.repository.CommentRepository;
import com.cs555.app.communityexploration.repository.VideoRepository;
import com.cs555.app.communityexploration.service.CommunityExplorationService;

import io.micrometer.common.util.StringUtils;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

/**
 * @author Himanshu Dagar
 */

@Service
public class CommunityExplorationServiceImpl implements CommunityExplorationService {

	@PersistenceContext
    private EntityManager entityManager;

	@Autowired
	private VideoRepository videoRepository;
	
	@Autowired
	private CommentRepository commentRepository;


	@Override
	@Transactional(rollbackFor = Exception.class)
	public GetVideosResponseDTO fetchVideos(String locName, List<ErrorDTO> errorList) {

		List<Video> videoList = new ArrayList<>();

		GetVideosResponseDTO videosResponseDTO = new GetVideosResponseDTO();
		List<GetVideoResponseDTO> videoResponseDTOList = new ArrayList<>();
		videosResponseDTO.setVideos(videoResponseDTOList);

		/*
		 * locName is optional in the API. So, if user does not
		 * send any locName, then I'll return all the videos.
		 *
		 * Otherwise, I'll filter based on provided location
		 */
		try {
			if(locName == null || locName.length() == 0) {
				videoList = videoRepository.findAllVideos();
			} else {
				// It means user has sent something in the location
				videoList = videoRepository.findByLocation(locName);
			}
		} catch(Exception e) {
			// We will return empty response to the user in this case
			errorList.add(new ErrorDTO(ErrorResponseEnum.DATABASE_ISSUE_FOUND, locName));
			return videosResponseDTO;
		}

		if (CollectionUtils.isEmpty(videoList)) {
			errorList.add(new ErrorDTO(ErrorResponseEnum.NO_VIDEO_FOUND, locName));
		} else {

			for(Video video: videoList) {

				GetVideoResponseDTO videoResponseDTO = new GetVideoResponseDTO();
				videoResponseDTO.setVideoId(video.getVideoId());
				videoResponseDTO.setUserId(video.getUserId());
				videoResponseDTO.setLocation(video.getLocation());
				videoResponseDTO.setUrl(video.getVideoUrl());
				videoResponseDTO.setLikes(video.getLikes());
				videoResponseDTO.setDescription(video.getDescription());

				videoResponseDTOList.add(videoResponseDTO);
			}
		}

		return videosResponseDTO;
	}

	@Override
	@Transactional(rollbackFor = Exception.class)
	public PostVideoResponseDTO postVideo(PostVideoRequest postVideoRequest, List<ErrorDTO> errorList) {

		PostVideoResponseDTO postVideoResponseDTO = new PostVideoResponseDTO();

		Video video = new Video();
		video.setUserId(postVideoRequest.getUserId());
		video.setLocation(postVideoRequest.getLocation());
		video.setDescription(postVideoRequest.getDescription());
		video.setVideoUrl(postVideoRequest.getVideoUrl());
		video.setPostedAt(new Date());
		video = videoRepository.save(video);
		videoRepository.flush();
		entityManager.clear();

		postVideoResponseDTO.setVideoId(video.getVideoId());

		return postVideoResponseDTO;
	}

	@Override
	@Transactional(rollbackFor = Exception.class)
	public PostCommentResponseDTO postComment(String videoId, PostCommentRequest postCommentRequest, List<ErrorDTO> errorList) {
		
		// Create a response DTO
		PostCommentResponseDTO postCommentResponseDTO = new PostCommentResponseDTO();
		
		// Create a new Comment entity
	    Comment newComment = new Comment();
	    newComment.setUserId(postCommentRequest.getUserId());
	    newComment.setVideoId(videoId);
	    newComment.setComment(postCommentRequest.getComment());
	    newComment.setPostedAt(new Date()); // Set the current time as the posted time

	    // Save the new comment to the database
	    Comment savedComment = null;
	    try {
	        savedComment = commentRepository.save(newComment);
	    } catch (Exception e) {
	        // Handle any exceptions, such as database errors and add to the error list
	        ErrorDTO error = new ErrorDTO();
	        error.setMessage(e.getMessage());
	        errorList.add(error);
	        return postCommentResponseDTO;
	    }
	    
	    commentRepository.flush();
		entityManager.clear();

	    // Return the response DTO
		postCommentResponseDTO.setCommentId(savedComment.getCommentId());
	    return postCommentResponseDTO;
	}

	@Override
	@Transactional(rollbackFor = Exception.class)
	public GetCommentsResponseDTO getCommentsBasedOnUserOrVideo(Integer userId, String videoId,
			List<ErrorDTO> errorList) {
		
		GetCommentsResponseDTO getCommentsResponse = new GetCommentsResponseDTO();
		
		if((userId == null || userId.intValue() == 0) && StringUtils.isEmpty(videoId)) {
			errorList.add(new ErrorDTO(ErrorResponseEnum.MISSING_BOTH_FIELDS, null));
			return getCommentsResponse; 
		}
		
		List<Comment> comments;
		
	    try {
	        // Fetch comments from the database using the repository
	        comments = commentRepository.findCommentsByUserIdAndVideoId(userId, videoId);
	    } catch (Exception e) {
	        // Handle any exceptions, such as database errors, and add to the error list
	        ErrorDTO error = new ErrorDTO();
	        error.setMessage(e.getMessage());
	        errorList.add(error);
	        return getCommentsResponse;
	    }

	    // Convert Comment entities to GetCommentResponseDTO objects
	    List<GetCommentResponseDTO> commentDTOs = new ArrayList<>();
	    for(Comment comment: comments) {
	    	GetCommentResponseDTO getCommentResponse = new GetCommentResponseDTO();
	    	getCommentResponse.setUserId(comment.getUserId());
	    	getCommentResponse.setCommentId(comment.getCommentId());
	    	getCommentResponse.setComment(comment.getComment());
	    	
	    	// videoId
	    	Video video = videoRepository.findByVideoId(Integer.parseInt(comment.getVideoId())).get(0);
	    	
	    	VideoInfoDTO videoInfoDTO = new VideoInfoDTO();
	    	
	    	videoInfoDTO.setVideoId(video.getVideoId());
	    	videoInfoDTO.setUrl(video.getVideoUrl());
	    	videoInfoDTO.setLocation(video.getLocation());
	    	
	    	getCommentResponse.setVideoInfo(videoInfoDTO);
	    	
	    	commentDTOs.add(getCommentResponse);
	    }

	    // Create and return the response DTO
	    
	    getCommentsResponse.setComments(commentDTOs);
		
		return getCommentsResponse;
	}
	
	
}
