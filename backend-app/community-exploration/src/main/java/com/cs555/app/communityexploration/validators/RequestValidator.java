package com.cs555.app.communityexploration.validators;

import java.util.List;
import java.util.regex.Pattern;

import org.apache.commons.lang.StringUtils;

import com.cs555.app.communityexploration.contract.request.PostVideoRequest;
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
	
}
