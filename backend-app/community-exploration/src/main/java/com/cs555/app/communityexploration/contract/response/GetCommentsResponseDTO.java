package com.cs555.app.communityexploration.contract.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * @author Himanshu Dagar
 */

@JsonInclude(Include.NON_NULL)
public class GetCommentsResponseDTO {
	
	List<GetCommentResponseDTO> comments;

	/**
	 * @return the comments
	 */
	public List<GetCommentResponseDTO> getComments() {
		return comments;
	}

	/**
	 * @param comments the comments to set
	 */
	public void setComments(List<GetCommentResponseDTO> comments) {
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "GetCommentsResponseDTO [comments=" + comments + "]";
	}
	
}
