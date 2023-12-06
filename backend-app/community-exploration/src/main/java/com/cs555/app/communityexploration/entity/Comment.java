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
@Table(name = "Comment")
public class Comment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CommentId")
	private int commentId;
	
	@Column(name = "UserId")
	private int userId;
	
	@Column(name = "VideoId")
	private String videoId;
	
	@Column(name = "Comment")
	private String comment;
	
	@Column(name = "PostedAt")
	@Temporal(TemporalType.TIMESTAMP)
	private Date postedAt;
	
	public Comment() {}

	/**
	 * @param commentId
	 * @param userId
	 * @param videoId
	 * @param comment
	 * @param postedAt
	 */
	public Comment(int commentId, int userId, String videoId, String comment, Date postedAt) {
		super();
		this.commentId = commentId;
		this.userId = userId;
		this.videoId = videoId;
		this.comment = comment;
		this.postedAt = postedAt;
	}

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
		return "Comment [commentId=" + commentId + ", userId=" + userId + ", videoId=" + videoId + ", comment="
				+ comment + ", postedAt=" + postedAt + "]";
	}
	
}
