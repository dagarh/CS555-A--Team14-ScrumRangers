
import React from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import ProgressBar from './ProgressBar';
import { Video } from 'expo-av';

export function UploadingAndroid({ image, video, progress }) {
  return (
    <View style={styles.container}>
      {image && (
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
      )}
      {video && (
        <Video
          source={{ uri: video }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          style={styles.video}
        />
      )}
      <Text style={styles.text}>Uploading...</Text>
      <ProgressBar progress={progress} />
      <View style={styles.separator} />
      <TouchableOpacity>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 10,
    rowGap: 12,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 6,
  },
  video: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 12,
  },
  separator: {
    height: 1,
    borderWidth: StyleSheet.hairlineWidth,
    width: '100%',
    borderColor: '#00000020',
  },
  cancelText: {
    fontWeight: '500',
    color: '#3478F6',
    fontSize: 17,
  },
});
