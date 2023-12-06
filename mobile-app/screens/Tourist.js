import React, { useEffect, useState, useRef ,useContext } from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
  Alert,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { db, storage } from '../firebaseConfig';
import { Video } from 'expo-av';
import { AuthContext } from '../store/auth-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

function Tourist({ navigation }) {
  const [video, setVideo] = useState('');
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState([]);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const videoRef = useRef(null);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [userInput, setUserInput] = useState('');
  const authCtx = useContext(AuthContext); 


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



  async function promptAsync(message) {
    return new Promise((resolve) => {
      Alert.prompt(
        message,
        null,
        (userInput) => resolve(userInput),
        'plain-text',
        null,
        'default'
      );
    });
  }

  async function pickVideo() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        quality: 1,
        videoMaxDuration: 30,
      });
  
      if (!result.canceled) {
        // Check if the duration of the video is within the limit
        if (result.assets[0].duration <= 30000) {
          // Upload the video with location and description
          await uploadVideo(result.assets[0].uri);
        } else {
          Alert.alert("Error", "Please select a video that is less than 30 seconds long.");
        }
      }
    } catch (error) {
      console.error("Error picking or uploading video:", error);
      // Handle the error appropriately, e.g., show an error message to the user
    }
  }
  
  
  
  

  async function recordVideo() {
    Alert.alert(
      "Select Video",
      "Would you like to record a new video or choose from the gallery?",
      [
        {
          text: "Record",
          onPress: () => captureVideo(),
        },
        {
          text: "Pick from Gallery",
          onPress: () => pickVideo(),
        },
        {
          text: "Cancel",
          style: "cancel"
        },
      ]
    );
  }

  async function reportVideo() {
    Alert.alert(
      "Select Report Reason",
      "",
      [
        {
          text: "Nudity/Pornography",
          style: "cancel",
        },
        {
          text: "Inappropriate Content",
          style: "cancel",
        },
        {
          text: "Broken/Not Working",
          style: "cancel",
        },
        {
          text: "Hate Topics/Violence",
          style: "cancel",
        },
        {
          text: "Cancel",
          style: "cancel"
        },
      ]
    );
  }

  async function captureVideo() {
  try {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("Camera Permission Denied", "You've refused to allow this app to access your camera!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
      videoMaxDuration: 30,
    });

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
      await uploadVideo(result.assets[0].uri);
    }
  } catch (error) {
    console.error("Error capturing video:", error);
  }
}


async function uploadVideo(uri) {
  try {
    //const user = authCtx.user; // Adjust according to how the user is stored in AuthContext

      
    let currentLocation = location;
    let currentDescription = description;

     // const userId = user.uid; 
    const response = await fetch(uri);
    const blob = await response.blob();
    const storageRef = ref(storage, `Videos/${new Date().getTime()}`);

    const uploadTask = uploadBytesResumable(storageRef, blob);
    if (!location) {
      const locationInput = await new Promise((resolve) => {
        Alert.prompt(
          "Enter Location",
          "Please enter a location for the video",
          [
            {
              text: "Cancel",
              onPress: () => resolve(null),
              style: "cancel"
            },
            {
              text: "OK",
              onPress: (text) => resolve(text)
            }
          ],
          "plain-text"
        );
      });

      if (locationInput) {
        setLocation(locationInput); 
        currentLocation = locationInput; // Store the provided location
      } else {
        Alert.alert('Input Required', 'You need to enter a location to proceed.');
        return; // Exit the function if no location is entered
      }
    }

    if (!description) {
      const descriptionInput = await new Promise((resolve) => {
        Alert.prompt(
          "Enter Description",
          "Please enter a description for the video",
          [
            {
              text: "Cancel",
              onPress: () => resolve(null),
              style: "cancel"
            },
            {
              text: "OK",
              onPress: (text) => resolve(text)
            }
          ],
          "plain-text"
        );
      });

      if (descriptionInput) {
        setDescription(descriptionInput);
        currentDescription = descriptionInput; // Store the provided description
      } else {
        Alert.alert('Input Required', 'You need to enter a description to proceed.');
        return; // Exit the function if no description is entered
      }
    }

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(Math.round(progress));
      },
      (error) => {
        console.error('Upload error: ', error);
      },
      async () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const videoId = await uploadVideoToAPI("1", currentLocation, description, downloadURL);
if (videoId) {
  await saveRecord('video', downloadURL, new Date().toISOString(), currentLocation, currentDescription, videoId);
} else {
  console.error('Failed to get videoId from API');
}
          setVideo('');
          setLocation('');
          setDescription('');
        });
      }
    );
   
  } catch (error) {
    console.error('Error uploading video:', error);
  }
}
async function uploadVideoToAPI(userId, location, description, videoUrl) {
  try {
    const response = await fetch('https://c5f9-108-53-61-3.ngrok-free.app/community-exploration/api/v1/videos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        location,
        description,
        videoUrl,
      }),
    });

    const responseData = await response.json();
    console.log('API Response:', responseData); // Log the entire response

    if (!response.ok || !responseData.data) {
      throw new Error('Failed to upload video data to the API or invalid response data');
    }

    return responseData.data.videoId; // Return the videoId from the response
  } catch (error) {
    console.error('Error uploading video data to API:', error);
    return null; // Return null in case of an error
  }
}

  async function saveRecord(fileType, url, createdAt, location, description, videoId) {
    try {
      await addDoc(collection(db, "files"), {
        fileType,
        url,
        createdAt,
        location,
        description,
        videoId, // Include videoId in the document
      });

      // Reset location and description after saving
      setLocation("");
      setDescription("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // Toggle like status
  const handleLike = (id) => {
    setFiles(files.map(file => file.id === id ? { ...file, liked: !file.liked } : file));
  };

  // Toggle report status
  const handleReport = (id) => {
    setFiles(files.map(file => file.id === id ? { ...file, reported: !file.reported } : file));
  };

  // Toggle bookmark status
  const handleBookmark = (id) => {
    setFiles(files.map(file => file.id === id ? { ...file, bookmarked: !file.bookmarked } : file));
  };

  const handleComment = () => { console.log("Comment Pressed"); };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={files}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.videoContainer}>
            <Video
              source={{ uri: item.url }}
              rate={1.0}
              volume={1.0}
              isMuted={true}
              resizeMode="cover"
              shouldPlay
              isLooping
              useNativeControls={false}
              style={StyleSheet.absoluteFill}
            />
              <View style={styles.videoMetadata}>
                <View style={styles.locationContainer}>
                  <Ionicons name="location-outline" size={20} color="white" style={styles.locationIcon} />
                  <Text style={styles.videoLocation}>{item.location}</Text>
                </View>
                <Text style={styles.videoDescription}>{item.description}</Text>
              </View>

              <View style={styles.iconContainer}>
                <Ionicons style={styles.iconindividual}
                  name={item.liked ? "heart" : "heart-outline"}
                  size={30}
                  color={item.liked ? "red" : "black"}
                  onPress={() => handleLike(item.id)}
                />
                <Ionicons style={styles.iconindividual}
                  name="chatbubble-outline"
                  size={30}
                  color="black"
                  onPress={handleComment}
                />
                <Ionicons style={styles.iconindividual}
                  name={item.reported ? "alert-circle" : "alert-circle-outline"}
                  size={30}
                  color={item.reported ? "black" : "black"}
                  onPress={reportVideo}
                />
                <Ionicons style={styles.iconindividual}
                  name={item.bookmarked ? "bookmark" : "bookmark-outline"}
                  size={30}
                  color={item.bookmarked ? "black" : "black"}
                  onPress={() => handleBookmark(item.id)}
                />
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        onPress={recordVideo}
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          width: 60,
          height: 60,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 30,
        }}
      >
        <Ionicons name="videocam" size={30} color="white" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: 10,
  },
  videoContainer: {
    width: width,
    height: height
  },
  iconindividual: {
    paddingTop: 30,
  },
  videoMetadata: {
    position: 'absolute',
    bottom: 220,
    left: 0,
    right: 0,
    padding: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 5,
  },
  videoLocation: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 23,
  },
  videoDescription: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 4,
  },
});

export default Tourist;
