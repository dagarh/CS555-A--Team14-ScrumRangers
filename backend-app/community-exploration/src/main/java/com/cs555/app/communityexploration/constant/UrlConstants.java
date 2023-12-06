package com.cs555.app.communityexploration.constant;

/**
 * @author Himanshu Dagar
 *
 */
public interface UrlConstants {

	String CONTROLLER_URL = "/api/v1";
	String VIDEO_URL = "/videos/locations/{locName}";
	String COMMENTS_URL = "/videos/comments";
	String DEFAULT_VIDEO_URL = "/videos/";
	String POST_VIDEO_URL = "/videos/";
	String LIKE_VIDEO_URL = "/videos/{videoId}/like";
	String COMMENT_VIDEO_URL = "/videos/{videoId}/comment";
	String REPORT_VIDEO_URL = "/videos/{videoId}/report";
}
