package com.cs555.app.communityexploration.contract.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * @author Himanshu Dagar
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class VideoLikeRequest {

	private int userId;
	
	/**
	 * @return the userId
	 */
	public int getUserId() {
		return userId;
	}

	/**
	 * @param userId the userId to set
	 */
	public void setUserId(int userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "VideoLikeRequest [userId=" + userId + "]";
	}

}
