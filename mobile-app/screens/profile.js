import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper'
import {TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Feather } from '@expo/vector-icons';
/**
 * Renders a static profile header.
 * 
 * @returns 
 */
export default function Profile() {
    return (
        <View style={styles.container}>
        <Avatar.Icon size={80} icon={"account"} />
        <Text style={styles.emailText}>user@example.com</Text> 
        <View style={styles.counterContainer}>
            <View style={styles.counterItemContainer}>
                <Text style={styles.counterNumberText}>0</Text>
                <Text style={styles.counterLabelText}>Posts</Text>
            </View>
            <View style={styles.counterItemContainer}>
                <Text style={styles.counterNumberText}>0</Text>
                <Text style={styles.counterLabelText}>Comments</Text>
            </View>
            <View style={styles.counterItemContainer}>
                <Text style={styles.counterNumberText}>0</Text>
                <Text style={styles.counterLabelText}>Likes</Text>
            </View>
        </View>
        <View>
            <TouchableOpacity style={styles.grayOutlinedButton}>
                <Text style={styles.grayOutlinedButtonText}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    </View>
      
    )
}

// Styles remain unchanged
const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 65,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    counterContainer: {
        paddingBottom: 20,
        flexDirection: 'row',
    },
    counterItemContainer: {
        flex: 1,
        alignItems: 'center'
    },
    emailText: {
        padding: 20,
    },
    counterNumberText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    counterLabelText: {
        color: 'gray',
        fontSize: 11
    },
    Settings: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
    },
    Set: {
      padding: 10,
      fontSize: 16,
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    arrow: {
        position: 'absolute',
        top: 10,
        left: 350,
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

