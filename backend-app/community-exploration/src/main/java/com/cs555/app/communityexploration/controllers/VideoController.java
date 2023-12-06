package com.cs555.app.communityexploration.controllers;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cs555.app.communityexploration.constant.CommunityExplorationConstant;
import com.cs555.app.communityexploration.constant.UrlConstants;
import com.cs555.app.communityexploration.contract.request.PostCommentRequest;
import com.cs555.app.communityexploration.contract.request.PostVideoRequest;
import com.cs555.app.communityexploration.contract.request.VideoLikeRequest;
import com.cs555.app.communityexploration.contract.response.GetCommentsResponseDTO;
import com.cs555.app.communityexploration.contract.response.GetVideosResponseDTO;
import com.cs555.app.communityexploration.contract.response.PostCommentResponseDTO;
import com.cs555.app.communityexploration.contract.response.PostLikeResponseDTO;
import com.cs555.app.communityexploration.contract.response.PostVideoResponseDTO;
import com.cs555.app.communityexploration.contract.response.base.ErrorDTO;
import com.cs555.app.communityexploration.contract.response.base.ResponseDTO;
import com.cs555.app.communityexploration.service.CommunityExplorationService;
import com.cs555.app.communityexploration.validators.RequestValidator;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

/**
 * @author Himanshu Dagar
 */

@Api(value = "Video API", description = "[All Video related APIs]")
@RestController
@RequestMapping(UrlConstants.CONTROLLER_URL)
public class VideoController {

	@Autowired
	CommunityExplorationService communityExplorationService;

	@CrossOrigin
	@ApiOperation(value = "Get videos for all locations", notes = "Provide all the Videos", response = ResponseDTO.class)
	@GetMapping(value = UrlConstants.DEFAULT_VIDEO_URL, produces = "application/json")
	public ResponseDTO<GetVideosResponseDTO> getVideosForAllLocations() {

		ResponseDTO<GetVideosResponseDTO> responseBody = new ResponseDTO<>();
		List<ErrorDTO> errorList = new ArrayList<>();

		try {

			GetVideosResponseDTO videosResponse = communityExplorationService.fetchVideos(null, errorList);

			if (CollectionUtils.isEmpty(errorList)) {
				responseBody.setData(videosResponse);
			} else {
				responseBody.setError(errorList);
			}

			responseBody.setStatus(CommunityExplorationConstant.SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			responseBody.setStatus(CommunityExplorationConstant.FAILURE);

			// message is being sent only during exception
			responseBody.setMessage(e.getMessage());
		}

		return responseBody;
	}

	@CrossOrigin
	@ApiOperation(value = "Get videos based on the location", notes = "Provide the Videos based on the location, if it exists in the database", response = ResponseDTO.class)
	@GetMapping(value = {UrlConstants.VIDEO_URL}, produces = "application/json")
	public ResponseDTO<GetVideosResponseDTO> getVideosBasedOnLoc(
			@ApiParam(value = "locationName for which videos need to be retrieved", required = true) @PathVariable("locName") String locName) {

		ResponseDTO<GetVideosResponseDTO> responseBody = new ResponseDTO<>();
		List<ErrorDTO> errorList = new ArrayList<>();

		try {
			GetVideosResponseDTO videosResponse = communityExplorationService.fetchVideos(locName, errorList);

			if (CollectionUtils.isEmpty(errorList)) {
				responseBody.setData(videosResponse);
			} else {
				responseBody.setError(errorList);
			}

			responseBody.setStatus(CommunityExplorationConstant.SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			responseBody.setStatus(CommunityExplorationConstant.FAILURE);

			// message is being sent only during exception
			responseBody.setMessage(e.getMessage());
		}

		return responseBody;
	}
	
	@CrossOrigin
	@ApiOperation(value = "Get comments based on the user or video", notes = "Provide the comments based on the user or video, if it exists in the database", response = ResponseDTO.class)
	@GetMapping(value = {UrlConstants.COMMENTS_URL}, produces = "application/json")
	public ResponseDTO<GetCommentsResponseDTO> getCommentsBasedOnUserOrVideo(
			@RequestParam(value = "userId", required = false) Integer userId,
			@RequestParam(value = "videoId", required = false) String videoId) {

		ResponseDTO<GetCommentsResponseDTO> responseBody = new ResponseDTO<>();
		List<ErrorDTO> errorList = new ArrayList<>();

		try {

			GetCommentsResponseDTO commentsResposne = communityExplorationService.getCommentsBasedOnUserOrVideo(userId, videoId, errorList);

			if (CollectionUtils.isEmpty(errorList)) {
				responseBody.setData(commentsResposne);
			} else {
				responseBody.setError(errorList);
			}

			responseBody.setStatus(CommunityExplorationConstant.SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			responseBody.setStatus(CommunityExplorationConstant.FAILURE);

			// message is being sent only during exception
			responseBody.setMessage(e.getMessage());
		}

		return responseBody;
	}

	@CrossOrigin
	@ApiOperation(value = "Add like on a Video", notes = "Add like on a Video", response = ResponseDTO.class)
	@PostMapping(value = UrlConstants.LIKE_VIDEO_URL, produces = "application/json")
	public ResponseDTO<PostLikeResponseDTO> postLikeOnVideo(
			@ApiParam(value = "videoId on which like needs to be posted", required = true) @PathVariable("videoId") String videoId,
			@RequestBody VideoLikeRequest videoLikeRequest) {

		ResponseDTO<PostLikeResponseDTO> responseBody = new ResponseDTO<>();
		List<ErrorDTO> errorList = new ArrayList<>();
		RequestValidator.validateVideoLikeRequest(videoLikeRequest, errorList);

		try {
			if (CollectionUtils.isEmpty(errorList)) {
				// All request validations passed successfully
				// PostVideoResponseDTO postVideoResponseDTO = communityExplorationService.postVideo(postVideoRequest, errorList);


				if(CollectionUtils.isNotEmpty(errorList)) {
					responseBody.setError(errorList);
				} else {
					// All business validations passed successfully
					// responseBody.setData(postVideoResponseDTO);
				}
			} else {
				responseBody.setError(errorList);
			}

			responseBody.setStatus(CommunityExplorationConstant.SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			responseBody.setStatus(CommunityExplorationConstant.FAILURE);

			// message is being sent only during exception
			responseBody.setMessage(e.getMessage());
		}

		return responseBody;
	}
	
	@CrossOrigin
	@ApiOperation(value = "Add comment on a Video", notes = "Add comment on a Video", response = ResponseDTO.class)
	@PostMapping(value = UrlConstants.COMMENT_VIDEO_URL, produces = "application/json")
	public ResponseDTO<PostCommentResponseDTO> postCommentOnVideo(
			@ApiParam(value = "videoId on which comment needs to be posted", required = true) @PathVariable("videoId") String videoId,
			@RequestBody PostCommentRequest postCommentRequest) {

		ResponseDTO<PostCommentResponseDTO> responseBody = new ResponseDTO<>();
		List<ErrorDTO> errorList = new ArrayList<>();
		RequestValidator.validatePostCommentRequest(postCommentRequest, errorList);

		try {
			if (CollectionUtils.isEmpty(errorList)) {
				// All request validations passed successfully
				PostCommentResponseDTO postCommentResponseDTO = communityExplorationService.postComment(videoId, postCommentRequest, errorList);


				if(CollectionUtils.isNotEmpty(errorList)) {
					responseBody.setError(errorList);
				} else {
					// All business validations passed successfully
					responseBody.setData(postCommentResponseDTO);
				}
			} else {
				responseBody.setError(errorList);
			}

			responseBody.setStatus(CommunityExplorationConstant.SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			responseBody.setStatus(CommunityExplorationConstant.FAILURE);

			// message is being sent only during exception
			responseBody.setMessage(e.getMessage());
		}

		return responseBody;
	}
	
	@CrossOrigin
	@ApiOperation(value = "Add report on a Video", notes = "Add report on a Video", response = ResponseDTO.class)
	@PostMapping(value = UrlConstants.REPORT_VIDEO_URL, produces = "application/json")
	public ResponseDTO<?> postReportOnVideo(
			@ApiParam(value = "videoId on which reporting needs to be done", required = true) @PathVariable("videoId") String videoId) {

		ResponseDTO<?> responseBody = new ResponseDTO<>();
		List<ErrorDTO> errorList = new ArrayList<>();

		try {
			if (CollectionUtils.isEmpty(errorList)) {
				// All request validations passed successfully
				// PostVideoResponseDTO postVideoResponseDTO = communityExplorationService.postVideo(postVideoRequest, errorList);


				if(CollectionUtils.isNotEmpty(errorList)) {
					responseBody.setError(errorList);
				} else {
					// All business validations passed successfully
					// responseBody.setData(postVideoResponseDTO);
				}
			} else {
				responseBody.setError(errorList);
			}

			responseBody.setStatus(CommunityExplorationConstant.SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			responseBody.setStatus(CommunityExplorationConstant.FAILURE);

			// message is being sent only during exception
			responseBody.setMessage(e.getMessage());
		}

		return responseBody;
	}

	@CrossOrigin
	@ApiOperation(value = "Post video for any location", notes = "Save the video url in DB", response = ResponseDTO.class)
	@PostMapping(value = UrlConstants.POST_VIDEO_URL, produces = "application/json")
	public ResponseDTO<PostVideoResponseDTO> postVideo(@RequestBody PostVideoRequest postVideoRequest) {

		ResponseDTO<PostVideoResponseDTO> responseBody = new ResponseDTO<>();
		List<ErrorDTO> errorList = new ArrayList<>();
		RequestValidator.validatePostVideoRequest(postVideoRequest, errorList);

		try {
			if (CollectionUtils.isEmpty(errorList)) {
				// All request validations passed successfully
				PostVideoResponseDTO postVideoResponseDTO = communityExplorationService.postVideo(postVideoRequest, errorList);


				if(CollectionUtils.isNotEmpty(errorList)) {
					responseBody.setError(errorList);
				} else {
					// All business validations passed successfully
					responseBody.setData(postVideoResponseDTO);
				}
			} else {
				responseBody.setError(errorList);
			}

			responseBody.setStatus(CommunityExplorationConstant.SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			responseBody.setStatus(CommunityExplorationConstant.FAILURE);

			// message is being sent only during exception
			responseBody.setMessage(e.getMessage());
		}

		return responseBody;
	}

}
