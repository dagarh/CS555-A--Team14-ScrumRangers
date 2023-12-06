import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";

const mockUsernames = [
  "default_username", // 0
  "Kartheek", // 1
  "Adrien", // 2
  "Chandana", // 3
  "Dhruraj", // 4
  "Himanshu", // 5
  "Manoj", // 6
  "Raghavi", // 7
  "Vishwesh", // 8
];

const CommentsWindow = ({ visible, onClose, video, userId }) => {
  // Dummy comments for demonstration
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = async (videoId, userId) => {
    // console.log("Submitting comment with ", videoId, userId);
    if (newComment.trim() !== "") {
      let response = await axios.post(
        `https://c5f9-108-53-61-3.ngrok-free.app/community-exploration/api/v1/videos/${videoId}/comment`,
        {
          userId: userId,
          comment: newComment,
        }
      );
      // console.log(response);
      setComments([{ userId: userId, comment: newComment }, ...comments]);
      setNewComment("");
    }
  };
  const getCommentsFromVideo = async (videoId) => {
    const { data } = await axios.get(
      "https://c5f9-108-53-61-3.ngrok-free.app/community-exploration/api/v1/videos/comments",
      {
        params: {
          videoId: videoId,
        },
      }
    );
    if (!data || data.status !== "success") {
      console.error(`Could not retrieve comments for video ${videoId}`);
      return null;
    }
    // console.log("got data: ", data);
    // console.log(`Got comments for video ${videoId}: \n${data.data.comments}`);
    setComments(data.data.comments);
  };

  useEffect(() => {
    if (visible) {
      getCommentsFromVideo(video.videoId);
    }
  }, [visible, video]);
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.backgroundOverlay} />
        <View style={styles.commentsWindow}>
          <View style={styles.commentsHeader}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close-outline" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Comments</Text>
          </View>

          <ScrollView style={styles.scrollCommentSection}>
            {comments.map((comment, index) => (
              <View key={index} style={styles.comment}>
                <Text
                  style={{
                    fontSize: 18,
                    marginBottom: 3,
                    fontWeight: "bold",
                  }}
                >
                  {mockUsernames[comment.userId]}
                </Text>
                <Text
                  style={{ fontSize: 16, marginBottom: 10, marginLeft: 20 }}
                >
                  {comment.comment}
                </Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.inputBar}>
            <TextInput
              style={styles.input}
              placeholder="Type your comment..."
              value={newComment}
              onChangeText={(text) => setNewComment(text)}
            />
            <Button
              title="Submit"
              onPress={() => addComment(video.videoId, userId)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backgroundOverlay: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
  },
  commentsWindow: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "70%",
    // marginTop: "auto",
  },
  commentsHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    left: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollCommentSection: {
    flex: 1,
  },
  comment: {
    paddingHorizontal: 15,
    flexDirection: "column",
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default CommentsWindow;
