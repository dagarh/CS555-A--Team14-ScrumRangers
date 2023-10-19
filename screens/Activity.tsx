import React, {useState} from 'react';
import {SafeAreaView, StyleSheet,View, Dimensions} from 'react-native';
import EventCalendar from 'react-native-events-calendar';
import events_info from "../assets/events_info.json";


let {width} = Dimensions.get('window');

const Activity = () => {
  const [events, setEvents] = useState(events_info);

  const onClickEvent = (event) => {
    alert(JSON.stringify(event));
  };

  return (
    <SafeAreaView style={styles.itemContainer}>
      <View style={styles.itemContainer}>
        <EventCalendar
          eventTapped={onClickEvent}
          events={events}
          width={width}
          scrollToFirst
        />
      </View>
    </SafeAreaView>
  );
};
export default Activity;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor:'white',
    margin: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});



