package com.cs555.app.communityexploration.enumeration;

/**
 * @author Himanshu Dagar
 *
 */
public enum ErrorResponseEnum {
	
	// Dummy enum constant
	DUMMY("DUMMY_CODE", "DUMMY_MESSAGE");
	
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


