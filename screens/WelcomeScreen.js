import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../store/auth-context';
import AddVideo from './AddVideo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function LocalActivity() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Any events will be posted here!</Text>
        </View>
    );
}

function Tourist({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10 }}>
                <Ionicons name="add-circle-outline" size={42} color="blue"
                    onPress={() => navigation.navigate('AddVideo')} />
            </View>
            <View style={{ position: 'absolute', bottom: 10, right: 10, flexDirection: 'column' }}>
                <Ionicons name="heart-outline" size={42} color="black" style={styles.icon} />
                <Ionicons name="chatbubble-outline" size={40} color="black" style={styles.icon} />
                <Ionicons name="arrow-redo-outline" size={42} color="black" style={styles.icon} />
                <Ionicons name="bookmark-outline" size={42} color="black" style={styles.icon} />
            </View>
        </View>
    );
}

function Settings({ navigation }) {
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.Settings}>
            <TouchableOpacity onPress={() => navigateToScreen('Posts')}>
                <View style={styles.item}>
                    <Text style={styles.Set}>Posts</Text>
                    <Ionicons name="arrow-forward" size={22} color="black" style={styles.arrow}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateToScreen('SavedPosts')}>
                <View style={styles.item}>
                    <Text style={styles.Set}>Saved</Text>
                    <Ionicons name="arrow-forward" size={22} color="black" style={styles.arrow} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateToScreen('Likes')}>
                <View style={styles.item}>
                    <Text style={styles.Set}>Likes</Text>
                    <Ionicons name="arrow-forward" size={22} color="black" style={styles.arrow} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateToScreen('Comments')}>
                <View style={styles.item}>
                    <Text style={styles.Set}>Comments</Text>
                    <Ionicons name="arrow-forward" size={22} color="black" style={styles.arrow} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

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
            <Stack.Screen name="AddVideo" component={AddVideo} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    Settings: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
    },
    icon: {
        padding: 15
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
    arrow: {
        position: 'absolute',
        top: 10,
        left: 350,
    }
});

export default WelcomeScreen;
