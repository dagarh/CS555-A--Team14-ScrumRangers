package com.cs555.app.communityexploration.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cs555.app.communityexploration.contract.response.GetVideosResponseDTO;
import com.cs555.app.communityexploration.contract.response.base.ErrorDTO;
import com.cs555.app.communityexploration.service.CommunityExplorationService;

/**
 * @author Himanshu Dagar 
 */

@Service
public class CommunityExplorationServiceImpl implements CommunityExplorationService {

	@Override
	public GetVideosResponseDTO fetchVideos(String locName, List<ErrorDTO> errorList) {
		return null;
	}
	
}
