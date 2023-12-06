//Events page
import axios from 'axios';
import React, { useState } from 'react';

import {  TouchableOpacity, Linking } from 'react-native';
import {TextInput,FlatList, StyleSheet,ImageBackground,Pressable} from 'react-native';
import { Card, Title,Text } from 'react-native-paper';

export default function Activity(){
  const [location, setLocation] = useState('');
  const [events, setEvents] = useState([]);
  
  const eventSearch = async () => {
    try {
      const response = await axios.get(
        `https://app.ticketmaster.com/discovery/v2/events.json?city=${location}&apikey=DTMrDmRKKAShzZxtDpPxyrUaEIp6Nyym`
      );
      setEvents(response._embedded.events);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <Card>
        <Card.Content>
          <Title>{item.name}</Title>
          <Text>Date: {item.dates.start.localDate}</Text>
          <Text>Time: {item.dates.start.localTime}</Text>
          {/* Other details */}
          <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={styles.button}>
            <Text style={styles.buttonText}>Buy Tickets</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    );
  };

  return (
    <ImageBackground source={require('../assets/eventbackground.jpg')} style={styles.backgroundImage}>
      <TextInput
        style={styles.itemContainer}
        placeholder="Enter Location"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />
      <Pressable style={styles.button}onPress={()=>eventSearch()}>
        <Text style={styles.buttonText}>Search Events</Text>
      </Pressable>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />     
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 40,
    borderWidth: 1,
    marginBottom: 16,
    borderColor:'transparent',
    paddingHorizontal: 8,
    fontWeight:'bold',
    fontSize:20,
    color:'gold'

  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:'black', 
    borderRadius:300,
    padding:10,
  },
  buttonText:{
    color:'white',
    textAlign:'center',
  }
});


