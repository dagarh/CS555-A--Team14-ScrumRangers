
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function Profile({ 
    username = 'Unknown User', 
    posts = 0, 
    comments = 0, 
    likes = 0 
}) {
    return (
        <View style={styles.container}>
            <Avatar.Icon size={80} icon="account" />
            <Text style={styles.usernameText}>{username}</Text>
            <View style={styles.counterContainer}>
                <View style={styles.counterItemContainer}>
                    <Text style={styles.counterNumberText}>{posts}</Text>
                    <Text style={styles.counterLabelText}>Posts</Text>
                </View>
                <View style={styles.counterItemContainer}>
                    <Text style={styles.counterNumberText}>{comments}</Text>
                    <Text style={styles.counterLabelText}>Comments</Text>
                </View>
                <View style={styles.counterItemContainer}>
                    <Text style={styles.counterNumberText}>{likes}</Text>
                    <Text style={styles.counterLabelText}>Likes</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.grayOutlinedButton}>
                <Text style={styles.grayOutlinedButtonText}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 65,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    usernameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        paddingBottom: 40, 
        paddingTop:20
    },
    counterContainer: {
        flexDirection: 'row',
        paddingBottom: 20,
    },
    counterItemContainer: {
        flex: 1,
        alignItems: 'center'
    },
    counterNumberText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    counterLabelText: {
        color: 'gray',
        fontSize: 11
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

