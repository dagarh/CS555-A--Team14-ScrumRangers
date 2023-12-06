package com.cs555.app.communityexploration.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

/**
 * @author Himanshu Dagar
 *
 */
@Entity
@Table(name = "Video")
public class Video {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "VideoId")
	private int videoId;

	@Column(name = "UserId")
	private int userId;

	@Column(name = "Location")
	private String location;

	@Column(name = "Description")
	private String description;

	@Column(name = "Video_Url")
	private String videoUrl;

	@Column(name = "PostedAt")
	@Temporal(TemporalType.TIMESTAMP)
	private Date postedAt;

	@Column(name = "Likes")
	private int likes;
	
	@Column(name = "Reports")
	private int reports;
	
	// Default constructor
	public Video() {}

	/**
	 * @param userId
	 * @param location
	 * @param videoUrl
	 */
	public Video(int userId, String location, String videoUrl) {
		super();
		this.userId = userId;
		this.location = location;
		this.videoUrl = videoUrl;
	}

	/**
	 * @param videoId
	 * @param userId
	 * @param location
	 * @param description
	 * @param videoUrl
	 * @param likes
	 */
	public Video(int videoId, int userId, String location, String description, String videoUrl,
			int likes) {
		super();
		this.videoId = videoId;
		this.userId = userId;
		this.location = location;
		this.description = description;
		this.videoUrl = videoUrl;
		this.likes = likes;
	}

	/**
	 * @return the videoId
	 */
	public int getVideoId() {
		return videoId;
	}

	/**
	 * @param videoId the videoId to set
	 */
	public void setVideoId(int videoId) {
		this.videoId = videoId;
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

	/**
	 * @return the postedAt
	 */
	public Date getPostedAt() {
		return postedAt;
	}

	/**
	 * @param postedAt the postedAt to set
	 */
	public void setPostedAt(Date postedAt) {
		this.postedAt = postedAt;
	}

	/**
	 * @return the likes
	 */
	public int getLikes() {
		return likes;
	}

	/**
	 * @param likes the likes to set
	 */
	public void setLikes(int likes) {
		this.likes = likes;
	}
	
	/**
	 * @return the reports
	 */
	public int getReports() {
		return reports;
	}

	/**
	 * @param reports the reports to set
	 */
	public void setReports(int reports) {
		this.reports = reports;
	}

	@Override
	public String toString() {
		return "Video [videoId=" + videoId + ", userId=" + userId + ", location=" + location + ", description="
				+ description + ", videoUrl=" + videoUrl + ", postedAt=" + postedAt + ", likes=" + likes + ", reports="
				+ reports + "]";
	}

}
