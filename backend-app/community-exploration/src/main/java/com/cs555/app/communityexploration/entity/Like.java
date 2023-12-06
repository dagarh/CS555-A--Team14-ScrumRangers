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
@Table(name = "Like")
public class Like {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "LikeId")
	private int likeId;
	
	@Column(name = "UserId")
	private int userId;
	
	@Column(name = "VideoId")
	private String videoId;
	
	@Column(name = "PostedAt")
	@Temporal(TemporalType.TIMESTAMP)
	private Date postedAt;
	
	public Like() {}

	/**
	 * @param likeId
	 * @param userId
	 * @param videoId
	 * @param postedAt
	 */
	public Like(int likeId, int userId, String videoId, Date postedAt) {
		super();
		this.likeId = likeId;
		this.userId = userId;
		this.videoId = videoId;
		this.postedAt = postedAt;
	}

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
	 * @return the videoId
	 */
	public String getVideoId() {
		return videoId;
	}

	/**
	 * @param videoId the videoId to set
	 */
	public void setVideoId(String videoId) {
		this.videoId = videoId;
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

	@Override
	public String toString() {
		return "Like [likeId=" + likeId + ", userId=" + userId + ", videoId=" + videoId + ", postedAt=" + postedAt
				+ "]";
	}
	
}

