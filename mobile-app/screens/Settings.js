
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Settings({ navigation }) {
  const navigateToScreen = (screenName) => {
      navigation.navigate(screenName);
  };

  return (
      <View style={styles.Settings}>
          <TouchableOpacity style={styles.box} onPress={() => navigateToScreen('posts')}>
              <Text style={styles.Set}>Posts</Text>
              <Ionicons name="arrow-forward" size={22} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => navigateToScreen('SavedPosts')}>
              <Text style={styles.Set}>Saved</Text>
              <Ionicons name="arrow-forward" size={22} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => navigateToScreen('likes')}>
              <Text style={styles.Set}>Likes</Text>
              <Ionicons name="arrow-forward" size={22} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => navigateToScreen('Comments')}>
              <Text style={styles.Set}>Comments</Text>
              <Ionicons name="arrow-forward" size={22} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => navigateToScreen('ChangePassword')}>
              <Text style={styles.Set}>Change Password</Text>
              <Ionicons name="arrow-forward" size={22} color="black" />
          </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  Settings: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      padding: 10,
  },
  box: {
    width: '100%', 
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginBottom: 10, 
    borderRadius: 10, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  Set: {
    fontSize: 16,
    fontWeight: 'bold', 
  },
});

export default Settings;
