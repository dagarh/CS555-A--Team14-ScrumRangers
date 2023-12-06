package com.cs555.app.communityexploration.contract.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * @author Himanshu Dagar
 *
 */

@JsonInclude(Include.NON_NULL)
public class PostCommentResponseDTO {
	
	private int commentId;

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

	@Override
	public String toString() {
		return "PostCommentResponseDTO [commentId=" + commentId + "]";
	}
	
}

