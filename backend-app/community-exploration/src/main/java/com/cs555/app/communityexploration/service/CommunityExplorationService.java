package com.cs555.app.communityexploration.service;

import java.util.List;

import com.cs555.app.communityexploration.contract.request.PostCommentRequest;
import com.cs555.app.communityexploration.contract.request.PostVideoRequest;
import com.cs555.app.communityexploration.contract.response.GetCommentsResponseDTO;
import com.cs555.app.communityexploration.contract.response.GetVideosResponseDTO;
import com.cs555.app.communityexploration.contract.response.PostCommentResponseDTO;
import com.cs555.app.communityexploration.contract.response.PostVideoResponseDTO;
import com.cs555.app.communityexploration.contract.response.base.ErrorDTO;

/**
 * @author Himanshu Dagar
 *
 */
public interface CommunityExplorationService {

	/**
	 *
	 * @param locName
	 * @param errorList
	 * @return
	 */
	GetVideosResponseDTO fetchVideos(String locName, List<ErrorDTO> errorList);

	/**
	 *
	 * @param postVideoRequest
	 * @param errorList
	 * @return
	 */
	PostVideoResponseDTO postVideo(PostVideoRequest postVideoRequest, List<ErrorDTO> errorList);
	
	/**
	 *
	 * @param videoId 
	 * @param postCommentRequest
	 * @param errorList
	 * @return
	 */
	PostCommentResponseDTO postComment(String videoId, PostCommentRequest postCommentRequest, List<ErrorDTO> errorList);
	
	/**
	 *
	 * @param userId
	 * @param videoId
	 * @param errorList
	 * @return
	 */
	GetCommentsResponseDTO getCommentsBasedOnUserOrVideo(Integer userId, String videoId, List<ErrorDTO> errorList);

}
