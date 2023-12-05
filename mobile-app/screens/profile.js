import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function Profile({
  defaultUsername = 'Unknown User',
  defaultBio = 'No bio available',
  defaultLocation = 'No location set',
}) {
  const [username, setUsername] = useState(defaultUsername);
  const [bio, setBio] = useState(defaultBio);
  const [location, setLocation] = useState(defaultLocation);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    // You can add logic here to save the updated profile information to your database or state.
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <Avatar.Icon size={80} icon="account" />
      <Text style={styles.usernameText}>{isEditing ? 'Edit Your Profile' : username}</Text>
      {isEditing && (
        <TextInput
          style={styles.editInput}
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Enter your username"
        />
      )}
      <Text style={styles.bioText}>{bio}</Text>
      {isEditing && (
        <TextInput
          style={styles.editInput}
          value={bio}
          onChangeText={(text) => setBio(text)}
          placeholder="Enter your bio"
        />
      )}
      <Text style={styles.locationText}>{location}</Text>
      {isEditing && (
        <TextInput
          style={styles.editInput}
          value={location}
          onChangeText={(text) => setLocation(text)}
          placeholder="Enter your location"
        />
      )}
      <View style={styles.counterContainer}>
      </View>
      {isEditing ? (
        <TouchableOpacity style={styles.grayOutlinedButton} onPress={handleSaveProfile}>
          <Text style={styles.grayOutlinedButtonText}>Save Profile</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.grayOutlinedButton} onPress={handleEditProfile}>
          <Text style={styles.grayOutlinedButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  usernameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 10,
    paddingTop: 20,
  },
  bioText: {
    fontSize: 16,
    color: 'gray',
    paddingBottom: 10,
  },
  locationText: {
    fontSize: 16,
    color: 'gray',
    paddingBottom: 20,
  },
  editInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
    width: '100%',
  },
  counterContainer: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  counterItemContainer: {
    flex: 1,
    alignItems: 'center',
  },
  counterNumberText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  counterLabelText: {
    color: 'gray',
    fontSize: 11,
  },
  grayOutlinedButton: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  grayOutlinedButtonText: {
    color: 'black',
  },
});