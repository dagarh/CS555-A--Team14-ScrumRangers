package com.cs555.app.communityexploration.contract.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * @author Himanshu Dagar
 *
 */

@JsonInclude(Include.NON_NULL)
public class PostVideoResponseDTO {

	private int videoId;

	/**
	 * @return the videoId
	 */
	public int getVideoId() {
		return videoId;
	}

	/**
	 * @param videoId the videoId to set
	 */
	public void setVideoId(int videoId) {
		this.videoId = videoId;
	}

	@Override
	public String toString() {
		return "PostVideoResponseDTO [videoId=" + videoId + "]";
	}

}
