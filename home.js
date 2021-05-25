
import React, { useState, useEffect, Component } from 'react';
import {Text,StyleSheet,View,ScrollView,Dimensions, Animated, Alert, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Paho from '../src/paho-mqtt'




var data = '0';
var dataChange = false;
var runApp = false;
function mqtt_connect() {
  var client;
  client = new Paho.Client('io.adafruit.com', 443, 'web_' + parseInt(Math.random() * 100, 10));
  var options = {     
    useSSL: true,
    userName: 'Kien1120',
    password: 'aio_heNu56NaI8yoBXbqf6FlPCSlBOLl',
    keepAliveInterval: 60,
    onSuccess: onConnect,
    onFailure: onFail
  };
  client.connect(options);

  //const [Step, setStep] = useState('0'); 

  
  function onConnect() {
    console.log("Connected!");
    client.subscribe('Kien1120/feeds/test');  
  }

  function onFail(context) {
    console.log(context);
    console.log("Connection failed!");
    Alert.alert('Failure to Connect',
      "Unable to connect to host. Try again later.",
      [
        { text: "OK" }
      ],
    )
  }
  
  function onMessageArrived(message) {
    console.log("Message Arrived:" + message.payloadString);
    //setStep(message.payloadString);    //setStep_Count(message.payloadString);
    data = message.payloadString;
    dataChange = true;

  } 

  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:" +  responseObject.errorMessage);
    }
  }   

  client.onMessageArrived = onMessageArrived;     
  client.onConnectionLost = onConnectionLost; 



  return (
    <Text>react_native_mqtt:</Text>
  )
}










const HomeStack = createStackNavigator();
var { height } = Dimensions.get('window');
var height = Dimensions.get('window').height;
function HomeStackScreen({props}){
  const step =600;
  const target = 1200;
  const width = ((step/target)*100).toString(10) + '%';

  

  const [Step, setStep] = useState('0'); 
  useEffect(() => {
    const interval = setInterval(() => {
      if(dataChange){
        dataChange = false
        setStep(data);
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);


  return(
    
    <View style={{flex:1}}>
        <View style={{ flex: 1.2,alignItems:'center',borderBottomColor: 'gray',borderBottomWidth: 1}}>
          <Text h1 style={styles.bigBlack}>Today</Text>
          <View style={styles.todayBox}>
            <View>
              <Text style={styles.todayTitleText}>
              { runApp 
                ? <Text>{Step}<Text style={styles.stepsFormat}> Steps</Text></Text>
                : <Text> <Button title="Start" onPress={() => {
                  mqtt_connect();
                  runApp = true;
                  }}/> </Text>
              }
              </Text>
            </View>

          </View>
        </View>

        <View style={{flex: 1,borderBottomColor: 'gray',borderBottomWidth: 1}}>
            <View style = {{flex:1,alignItems:'center'}}>
              <Text h2 style={styles.bigBlack}>Process</Text>
              <View style={styles.progressBar}>
                <Animated.View style={[styles.absoluteFill,{width}]}/>
              </View>
              <Text>{width}</Text>
            </View>
        </View>
        <View style={{flex:2, alignItems:'center',}}>
          <Text h3 style={styles.bigBlack}>More</Text>
          <View style={styles.todayBox}>
            <View>
              <Text style={styles.todayTitleText}>Walking + Running Distance</Text>
            </View>
            <View>
              <Text style={styles.todayBodyText}>5.5 km</Text>
            </View>
          </View>
          <Text> </Text>
          <View style={styles.todayBox}>
            <View>
              <Text style={styles.todayTitleText}>Active Energy</Text>
            </View>
            <View>
              <Text style={styles.todayBodyText}>4000 kcal</Text>
            </View>
          </View>
        </View>
       </View>
      
  );
};
export default function HomeScreen({navigation}){
    return (
      <HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#ff6600',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="HomeSc" component={HomeStackScreen} options={{
        title:'Step Counter',
        headerLeft: () => (
            <Icon.Button name="menu" size={25} backgroundColor="#ff6600" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
    </HomeStack.Navigator>
      );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button:{
    color:'red'
  },
  bigBlack: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  todayBox: {
    backgroundColor: '#D7D7D7',
    alignItems:'center',
    justifyContent:'center',
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10
  },
  todayTitleText: {
    fontWeight: 'bold',
    color: '#ff6600',
    textAlign: 'left',
    fontSize: 20,
    marginBottom: 10
  },
  todayBodyText: {
    color: '#000000',
    fontSize: 16,
  },
  progressBar: {
    height: height/12,
    width: '85%',
    backgroundColor: '#D7D7D7',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 15
  },
  absoluteFill:
  {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#ff6600",
    borderRadius:15
  }
}
)