import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,SafeAreaView, TouchableOpacity,TextInput} from 'react-native';
import { Ionicons,Octicons,AntDesign,MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.avatar}>
          <Text>LIFE AT NEW YORK CITY</Text>
        </View>
    
        <View style={styles.image1}>
          <Image 
          source={require('./assets/new.jpeg')}
          style={{width:'100%',height:'100%'}}
          />
        </View>
  
        <View style={styles.low}>
          <View style={styles.item1}>
            <Text style={styles.heading1}>
              CRIME REPORTED
            </Text>
            <Text style={styles.matter1}>
              A black Honda Car with two men and a women tried to snatch chain on 42nd street on Sep 21 at 2:20AM.
            </Text>
          </View>
  
          <View style={styles.item2}>
            <Text style={styles.heading2}>
              UPCOMING EVENTS
            </Text>
            <Text style={styles.matter2}>
              Oct 31: Halloween Party at Central Park {'\n'}
              Nov 24: Thanks Giving Dinner at Community Hall
            </Text>
  
          </View>
          <View style={styles.item3}>
            <Text style={styles.heading3}>
              ROAD WORK NOTICE
            </Text>
            <Text style={styles.matter3}>
            We would like to inform you that roadwork is scheduled to take place on 84th Street From Oct-2 to Oct-6.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    avatar:{
      backgroundColor: 'grey',
      flex:0.05,
      justifyContent:'center',
      alignItems:'center'
    },
    image1:{
      flex:0.3,
  
    },
    low:{
      flex: 0.6
    },
    item1:{
      paddingTop:10,
      borderTopWidth:1,
      borderTopColor:'black',
      flex:0.2,
      alignItems:'center',
    },
    heading1:{
      paddingTop:5,
      color:'black',
    },
    matter1:{
      paddingTop:10,
      color:'red'
    },
    item2:{
      paddingTop:10,
      borderTopWidth:1,
      borderTopColor:'black',
      flex:0.2,
      alignItems:'center',
  
    },
    heading2:{
      color:'black'
    },
    matter2:{
      paddingTop:10,
      color:'#D171C3',
    },
    item3:{
      borderTopWidth:1,
      paddingTop:10,
      borderTopColor:'black',
      flex:0.2,
      alignItems:'center',
  
    },
    heading3:{
      color:'black',
    },
    matter3:{
      paddingTop:10,
      color:'#A6BA32'
    },
  
  });
  