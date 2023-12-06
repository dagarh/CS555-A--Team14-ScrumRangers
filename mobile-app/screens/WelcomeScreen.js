import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../store/auth-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from './Settings';
import Tourist from './Tourist';
import LocalActivity from './Activity';
import profile from './profile';
import posts from './posts';
import likes from './likes';
import ChangePassword from './ChangePassword';
import UserComments from "./userComments"
import SavedPosts from './SavedPosts';
import citychange from './citychange';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list' : 'ios-list-outline';
                    } else if (route.name === 'Tourist') {
                        iconName = focused ? 'film' : 'film-outline';
                    } else if (route.name === 'Local Activity') {
                        iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Tourist" component={Tourist} />
            <Tab.Screen name="Local Activity" component={LocalActivity} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}

function WelcomeScreen() {
    return (
        <Stack.Navigator initialRouteName="MainTabs">
            <Stack.Screen name="MainTabs" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="profile" component={profile} />
            <Stack.Screen name="posts" component={posts} />
            <Stack.Screen name="likes" component={likes} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="SavedPosts" component={SavedPosts} />
            <Stack.Screen name="Comments" component={UserComments} />
            <Stack.Screen name="citychange" component={citychange} />
        </Stack.Navigator>
    );
}

export default WelcomeScreen;
