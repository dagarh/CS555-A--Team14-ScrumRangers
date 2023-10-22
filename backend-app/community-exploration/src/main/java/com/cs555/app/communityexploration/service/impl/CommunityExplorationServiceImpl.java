package com.cs555.app.communityexploration.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cs555.app.communityexploration.contract.response.GetVideoResponseDTO;
import com.cs555.app.communityexploration.contract.response.GetVideosResponseDTO;
import com.cs555.app.communityexploration.contract.response.base.ErrorDTO;
import com.cs555.app.communityexploration.entity.Video;
import com.cs555.app.communityexploration.enumeration.ErrorResponseEnum;
import com.cs555.app.communityexploration.repository.VideoRepository;
import com.cs555.app.communityexploration.service.CommunityExplorationService;

/**
 * @author Himanshu Dagar 
 */

@Service
public class CommunityExplorationServiceImpl implements CommunityExplorationService {
	
	@Autowired
	private VideoRepository videoRepository;
	
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
	
}
