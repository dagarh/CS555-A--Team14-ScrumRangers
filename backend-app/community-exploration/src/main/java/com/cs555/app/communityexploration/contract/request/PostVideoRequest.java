package com.cs555.app.communityexploration.contract.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * @author Himanshu Dagar
 *
 */

@JsonIgnoreProperties(ignoreUnknown = true)
public class PostVideoRequest {

	private int userId;

	private String location;
	private String description;

	private String videoUrl;


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

	/**
	 * @return the location
	 */
	public String getLocation() {
		return location;
	}

	/**
	 * @param location the location to set
	 */
	public void setLocation(String location) {
		this.location = location;
	}

	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @return the videoUrl
	 */
	public String getVideoUrl() {
		return videoUrl;
	}

	/**
	 * @param videoUrl the videoUrl to set
	 */
	public void setVideoUrl(String videoUrl) {
		this.videoUrl = videoUrl;
	}

	@Override
	public String toString() {
		return "PostVideoRequest [userId=" + userId + ", location=" + location + ", description=" + description
				+ ", videoUrl=" + videoUrl + "]";
	}

}
