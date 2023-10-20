package com.cs555.app.communityexploration.controllers;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cs555.app.communityexploration.constant.CommunityExplorationConstant;
import com.cs555.app.communityexploration.constant.UrlConstants;
import com.cs555.app.communityexploration.contract.response.GetVideosResponseDTO;
import com.cs555.app.communityexploration.contract.response.base.ErrorDTO;
import com.cs555.app.communityexploration.contract.response.base.ResponseDTO;
import com.cs555.app.communityexploration.service.CommunityExplorationService;

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
	CommunityExplorationService coursesExplorationService;
	
	@CrossOrigin
	@ApiOperation(value = "Get videos based on the location", notes = "Provide the Videos based on the location, if it exists in the database", response = ResponseDTO.class)
	@GetMapping(value = UrlConstants.VIDEO_URL, produces = "application/json")
	public ResponseDTO<GetVideosResponseDTO> getVideosBasedOnLoc(
			@ApiParam(value = "locationName for which videos need to be retrieved", required = false) @PathVariable("locName") String locName) {

		ResponseDTO<GetVideosResponseDTO> responseBody = new ResponseDTO<>();

		List<ErrorDTO> errorList = new ArrayList<>();

		try {

			GetVideosResponseDTO videosResponse = coursesExplorationService.fetchVideos(locName, errorList);

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

}
