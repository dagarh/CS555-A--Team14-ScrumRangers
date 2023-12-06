import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function Settings({ navigation }) {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName, {userId: 1});
  };

  return (
    <View style={styles.Settings}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigateToScreen("posts")}
      >
        <Text style={styles.Set}>Posts</Text>
        <Ionicons name="arrow-forward" size={22} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => navigateToScreen("SavedPosts")}
      >
        <Text style={styles.Set}>Saved</Text>
        <Ionicons name="arrow-forward" size={22} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => navigateToScreen("likes")}
      >
        <Text style={styles.Set}>Likes</Text>
        <Ionicons name="arrow-forward" size={22} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => navigateToScreen("Comments")}
      >
        <Text style={styles.Set}>Comments</Text>
        <Ionicons name="arrow-forward" size={22} color="black" />
      </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => navigateToScreen('ChangePassword')}>
              <Text style={styles.Set}>Change Password</Text>
              <Ionicons name="arrow-forward" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => navigateToScreen('citychange')}>
              <Text style={styles.Set}>Change City</Text>
              <Ionicons name="arrow-forward" size={22} color="black" />
          </TouchableOpacity>
          <View style={styles.footer}>
        <Image
          source={require('../assets/City-black.png')}
          style={styles.logo}
        />
        <Text style={styles.footerText}>@Team 14-Scrum Rangers</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 100, // Adjust according to your logo's size
    height: 100, // Adjust according to your logo's size
    resizeMode: "contain",
  },
  footerText: {
    fontSize: 14,
    color: "#000", // Adjust the color as needed
  },
  Settings: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: 10,
  },
  box: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  Set: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Settings;
