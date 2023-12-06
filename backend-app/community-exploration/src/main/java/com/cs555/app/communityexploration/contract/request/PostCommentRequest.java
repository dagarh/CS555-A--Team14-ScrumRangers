package com.cs555.app.communityexploration.contract.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * @author Himanshu Dagar
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class PostCommentRequest {
	
	private int userId;
	
	private String comment;

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
	 * @return the comment
	 */
	public String getComment() {
		return comment;
	}

	/**
	 * @param comment the comment to set
	 */
	public void setComment(String comment) {
		this.comment = comment;
	}

	@Override
	public String toString() {
		return "PostCommentRequest [userId=" + userId + ", comment=" + comment + "]";
	}
	
}
