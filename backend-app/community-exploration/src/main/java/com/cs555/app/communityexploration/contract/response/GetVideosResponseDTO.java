package com.cs555.app.communityexploration.contract.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * @author Himanshu Dagar
 */

@JsonInclude(Include.NON_NULL)
public class GetVideosResponseDTO {

	List<GetVideoResponseDTO> videos;

	/**
	 * @return the videos
	 */
	public List<GetVideoResponseDTO> getVideos() {
		return videos;
	}

	/**
	 * @param videos the videos to set
	 */
	public void setVideos(List<GetVideoResponseDTO> videos) {
		this.videos = videos;
	}

	@Override
	public String toString() {
		return "GetVideosResponseDTO [videos=" + videos + "]";
	}

}
