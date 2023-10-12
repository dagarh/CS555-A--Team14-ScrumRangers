import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Settings({ navigation }) {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.Settings}>
      <TouchableOpacity onPress={() => navigateToScreen('Posts')}>
        <View style={styles.item}>
          <Text style={styles.Set}>Posts</Text>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToScreen('SavedPosts')}>
        <View style={styles.item}>
          <Text style={styles.Set}>Saved</Text>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToScreen('Likes')}>
        <View style={styles.item}>
          <Text style={styles.Set}>Likes</Text>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToScreen('Comments')}>
        <View style={styles.item}>
          <Text style={styles.Set}>Comments</Text>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Settings: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Set: {
    padding: 10,
    fontSize: 16, 
  },
});

export default Settings;