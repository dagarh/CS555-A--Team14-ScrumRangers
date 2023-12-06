import React, { useEffect, useState } from 'react';
import { View, FlatList, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

const { width } = Dimensions.get('window');
const videoSize = width / 2; // For a 3x3 grid

function AllPosts() {
  const [files, setFiles] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    // Fetch videos from the API
    async function fetchVideos() {
      try {
        const response = await fetch('https://c5f9-108-53-61-3.ngrok-free.app/community-exploration/api/v1/videos/');
        const json = await response.json();
        setFiles(json.data.videos);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }

    fetchVideos();
  }, []);

  const renderVideoItem = ({ item }) => {
    // Check if the video URL is from Firebase
    const isFirebaseVideo = item.url.includes('firebasestorage.googleapis.com');
  
    // Determine if the video should be playing
    const isPlaying = selectedVideo === item.videoId && isFirebaseVideo;
  
    // Render only Firebase videos
    return (
      <TouchableOpacity
        style={styles.videoContainer}
        onPress={() => setSelectedVideo(isPlaying ? null : item.videoId)}
      >
        {isFirebaseVideo && (
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
            onError={(e) => console.error('Video Error:', e)}
          />
        )}
        {!isPlaying && (
          <View style={styles.videoOverlay}>
            <Text style={styles.videoLocation}>{item.location}</Text>
            
          </View>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={files}
        keyExtractor={(item) => item.videoId.toString()}
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
    margin: 1, // Add a small margin for grid spacing
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
    padding: 4, // Add padding for the text
  },
  videoDescription: {
    color: 'white',
    marginBottom: 4, // Add margin to the bottom
  },
});

export default AllPosts;
