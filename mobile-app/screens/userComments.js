import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

function AllUserComments({ route }) {
  const { userId } = route.params;
  const [userComments, setUserComments] = useState([
    {
      commentId: 1,
      userId: 1,
      videoInfo: {
        location: "Niagara Falls",
      },
      comment: "test1",
    },
    {
      commentId: 2,
      userId: 1,
      videoInfo: {
        location: "Stevens Institute of Technology",
      },
      comment: "test2",
    },
    {
      commentId: 3,
      userId: 1,
      videoInfo: {
        location: "New York",
      },
      comment: "test3",
    },
  ]);

  const getCommentsFromUser = async (userId) => {
    const { data } = await axios.get(
      "https://c5f9-108-53-61-3.ngrok-free.app/community-exploration/api/v1/videos/comments",
      {
        params: {
          userId: userId,
        },
      }
    );
    if (!data || data.status !== "success") {
    //   console.error("Could not retrieve comments for user ", userId, data);
      setUserComments([]);
    } else
        setUserComments(data.data.comments);
  };
  useEffect(() => {
    getCommentsFromUser(userId);
  }, []);

  const renderUserComment = ({ item }) => {
    console.log("shoot");
    return (
      <TouchableOpacity
        style={styles.commentContainer}
        onPress={() => console.log("Pressed comment ", item.commentId)}
      >
        <View style={styles.comment}>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 3,
              fontWeight: "bold",
            }}
          >
            {"Near "}
            {item.videoInfo.location}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: 10, marginLeft: 20 }}>
            {item.comment}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollCommentSection}>
        {userComments.map((comment, index) => (
          <View key={index} style={styles.comment}>
            <Text
              style={{
                fontSize: 18,
                marginBottom: 3,
                fontWeight: "bold",
              }}
            >
              {"Near "}
              {comment.videoInfo.location}
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 10, marginLeft: 20 }}>
              {comment.comment}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  commentContainer: {
    backgroundColor: "#ccc",
  },
  comment: {
    paddingHorizontal: 15,
    flexDirection: "column",
  },
});

export default AllUserComments;
