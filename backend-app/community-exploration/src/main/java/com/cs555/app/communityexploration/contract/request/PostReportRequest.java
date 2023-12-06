package com.cs555.app.communityexploration.contract.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * @author Himanshu Dagar
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class PostReportRequest {
	
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
		return "PostReportRequest [videoId=" + videoId + "]";
	}
	
}
