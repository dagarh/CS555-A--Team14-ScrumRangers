import React, { useState } from "react";
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

const CommentsWindow = ({ visible, onClose }) => {
  // Dummy comments for demonstration
  const [comments, setComments] = useState([
    "Comment 1",
    "Comment 2",
    "Comment 3",
  ]);
  const [newComment, setNewComment] = useState("");
  const addComment = () => {
    if (newComment.trim() !== "") {
      setComments([newComment, ...comments]);
      setNewComment("");
    }
  };
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
                  some_user{" "}
                </Text>
                <Text
                  style={{ fontSize: 16, marginBottom: 10, marginLeft: 20 }}
                >
                  {comment}
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
            <Button title="Submit" onPress={addComment} />
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
