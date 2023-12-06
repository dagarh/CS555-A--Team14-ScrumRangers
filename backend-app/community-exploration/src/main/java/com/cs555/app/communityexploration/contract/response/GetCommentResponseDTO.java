package com.cs555.app.communityexploration.contract.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * @author Himanshu Dagar
 */
@JsonInclude(Include.NON_NULL)
public class GetCommentResponseDTO {
	
	private int commentId;
	
	private int userId;
	
	private VideoInfoDTO videoInfo;
	
	private String comment;

	/**
	 * @return the commentId
	 */
	public int getCommentId() {
		return commentId;
	}

	/**
	 * @param commentId the commentId to set
	 */
	public void setCommentId(int commentId) {
		this.commentId = commentId;
	}

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
	 * @return the videoInfo
	 */
	public VideoInfoDTO getVideoInfo() {
		return videoInfo;
	}

	/**
	 * @param videoInfo the videoInfo to set
	 */
	public void setVideoInfo(VideoInfoDTO videoInfo) {
		this.videoInfo = videoInfo;
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
		return "GetCommentResponseDTO [commentId=" + commentId + ", userId=" + userId + ", videoInfo=" + videoInfo
				+ ", comment=" + comment + "]";
	}
	
}
