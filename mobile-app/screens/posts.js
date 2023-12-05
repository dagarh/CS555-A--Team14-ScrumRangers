import React, { useEffect, useState } from 'react';
import { View, FlatList, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Adjust this import path as needed

const { width } = Dimensions.get('window');
const videoSize = width / 2; // Divide the width by 3 for a 3x3 grid

function AllPosts() {
  const [files, setFiles] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); // State to track the selected video

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'files'), (snapshot) => {
      const newFiles = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((file) => file.fileType === 'video');
      setFiles(newFiles);
    });

    return () => unsubscribe();
  }, []);

  const renderVideoItem = ({ item }) => {
    const isPlaying = selectedVideo === item.id;
    return (
      <TouchableOpacity
        style={styles.videoContainer}
        onPress={() => setSelectedVideo(isPlaying ? null : item.id)}
      >
        <Video
          source={{ uri: item.url }}
          rate={1.0}
          volume={1.0}
          isMuted={!isPlaying}
          resizeMode="cover"
          shouldPlay={isPlaying}
          isLooping
          useNativeControls
          style={StyleSheet.absoluteFill}
        />
        {!isPlaying && (
          <View style={styles.videoOverlay}>
            <Text style={styles.videoLocation}>{item.location}</Text>
            <Text style={styles.videoDescription}>{item.description}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={files}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={renderVideoItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  videoContainer: {
    width: videoSize,
    height: videoSize,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  videoOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent overlay
  },
  videoLocation: {
    color: 'white',
    fontWeight: 'bold',
  },
  videoDescription: {
    color: 'white',
    marginTop: 4,
  },
});

export default AllPosts;
