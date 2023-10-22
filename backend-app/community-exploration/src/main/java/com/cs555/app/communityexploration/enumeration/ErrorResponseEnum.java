package com.cs555.app.communityexploration.enumeration;

/**
 * @author Himanshu Dagar
 *
 */
public enum ErrorResponseEnum {
	
	NO_VIDEO_FOUND("NO_VIDEO_FOUND", "Video is not found!!!"),
	DATABASE_ISSUE_FOUND("DATABASE_ISSUE_FOUND", "Database issue is found");
	
	private final String responseCode;
	private final String responseMessage;
	
	/**
	 * @param responseCode
	 * @param responseMessage
	 */
	private ErrorResponseEnum(String responseCode, String responseMessage) {
		this.responseCode = responseCode;
		this.responseMessage = responseMessage;
	}

	/**
	 * @return the responseCode
	 */
	public String getErrorCode() {
		return this.responseCode;
	}

	/**
	 * @return the responseMessage
	 */
	public String getErrorMessage() {
		return this.responseMessage;
	}
	
}


