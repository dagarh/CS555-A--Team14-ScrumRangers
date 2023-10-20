package com.cs555.app.communityexploration.service;

import java.util.List;

import com.cs555.app.communityexploration.contract.response.GetVideosResponseDTO;
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
}
