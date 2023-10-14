import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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


const styles = StyleSheet.create({
    icon: {
        padding: 15
    },
});

export default Tourist;