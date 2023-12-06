package com.cs555.app.communityexploration.contract.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * @author Himanshu Dagar
 *
 */

@JsonInclude(Include.NON_NULL)
public class PostLikeResponseDTO {
	
	private int likeId;

	/**
	 * @return the likeId
	 */
	public int getLikeId() {
		return likeId;
	}

	/**
	 * @param likeId the likeId to set
	 */
	public void setLikeId(int likeId) {
		this.likeId = likeId;
	}

	@Override
	public String toString() {
		return "PostLikeResponseDTO [likeId=" + likeId + "]";
	}
	
}

