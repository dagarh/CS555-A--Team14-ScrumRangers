package com.cs555.app.communityexploration.validators;

import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.cs555.app.communityexploration.contract.request.PostCommentRequest;
import com.cs555.app.communityexploration.contract.request.PostVideoRequest;
import com.cs555.app.communityexploration.contract.request.VideoLikeRequest;
import com.cs555.app.communityexploration.contract.response.base.ErrorDTO;
import com.cs555.app.communityexploration.enumeration.ErrorResponseEnum;

/**
 * @author Himanshu Dagar
 *
 */
public class RequestValidator {

	public static List<ErrorDTO> validatePostVideoRequest(PostVideoRequest postVideoRequest, List<ErrorDTO> errorList) {

		if (StringUtils.isEmpty(postVideoRequest.getVideoUrl())) {
			errorList.add(new ErrorDTO(ErrorResponseEnum.MISSING_VIDEO_URL, null));
		} else if (postVideoRequest.getUserId() == 0) {
			errorList
					.add(new ErrorDTO(ErrorResponseEnum.MISSING_USER_ID, String.valueOf(postVideoRequest.getUserId())));
		} else if(StringUtils.isEmpty(postVideoRequest.getLocation())) {
			errorList.add(new ErrorDTO(ErrorResponseEnum.MISSING_LOCATION, null));
		}

		return errorList;
	}
	
	public static List<ErrorDTO> validateVideoLikeRequest(VideoLikeRequest videoLikeRequest, List<ErrorDTO> errorList) {
		
		if(videoLikeRequest.getUserId() == 0) {
			errorList.add(new ErrorDTO(ErrorResponseEnum.MISSING_USER_ID, String.valueOf(videoLikeRequest.getUserId())));
		}
		
		return errorList;
	}
	
	public static List<ErrorDTO> validatePostCommentRequest(PostCommentRequest postCommentRequest, List<ErrorDTO> errorList) {
		
		if(StringUtils.isEmpty(postCommentRequest.getComment())) {
			errorList.add(new ErrorDTO(ErrorResponseEnum.MISSING_COMMENT, null));
		} else if(postCommentRequest.getUserId() == 0) {
			errorList.add(new ErrorDTO(ErrorResponseEnum.MISSING_USER_ID, String.valueOf(postCommentRequest.getUserId())));
		}
		
		return errorList;
	}

}
