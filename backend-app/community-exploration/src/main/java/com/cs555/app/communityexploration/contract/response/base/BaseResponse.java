package com.cs555.app.communityexploration.contract.response.base;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * @author Himanshu Dagar
 *
 */
@JsonInclude(Include.NON_NULL)
public class BaseResponse {

	private String status;
	private List<ErrorDTO> error;

	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	/**
	 * @return the error
	 */
	public List<ErrorDTO> getError() {
		return error;
	}

	/**
	 * @param error the error to set
	 */
	public void setError(List<ErrorDTO> error) {
		this.error = error;
	}

	@Override
	public String toString() {
		return "BaseResponse [status=" + status + ", error=" + error + "]";
	}

}

