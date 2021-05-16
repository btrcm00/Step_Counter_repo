/*import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ChangepassScreen, HomeScreen, RegisterScreen, LoginScreen, DashboardScreen, LeaderboardScreen, StartScreen} from './Screens'
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = "StartScreen"
      >
        <Stack.Screen name = "StartScreen" component = {StartScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}  />
        <Stack.Screen name="HomeScreen" component={HomeScreen}  />
        <Stack.Screen name="ChangepassScreen" component={ChangepassScreen}  />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}  />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen}  />
        <Stack.Screen name="LeaderboardScreen" component={LeaderboardScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;*/




/*import React, {useEffect} from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import MQTTConnection from './src/MQTT_Connect'
import { Buffer } from 'buffer';
global.Buffer = Buffer; 


export default function App() {

  useEffect(() => {
    this.mqttConnect = new MQTTConnection()
    this.mqttConnect.onMQTTConnect = this.onMQTTConnect
    this.mqttConnect.onMQTTLost = this.onMQTTLost
    this.mqttConnect.onMQTTMessageArrived = this.onMQTTMessageArrived
    this.mqttConnect.onMQTTMessageDelivered = this.onMQTTMessageDelivered

    this.mqttConnect.connect('io.adafruit.com', 8883)

    onMQTTConnect = () => {
        console.log('App onMQTTConnect')
        this.mqttConnect.subscribeChannel('test')
    }
    onMQTTLost = () =>{
        console.log('App onMQTTFail')
    }

    onMQTTMessageArrived = (message) => {
        console.log('App onMQTTMessageArrived: ', message);
        console.log('App onMQTTMessageArrived payloadString: ', message.payloadString);
    }

    onMQTTMessageDelivered = (message) => {
        console.log('App onMQTTMessageDelivered: ', message);
    }

    return () => {
      this.mqttConnect.close()
    }

  }, [])

  return (
    <View style={styles.container}>
      <Text>react_native_mqtt</Text>
      <Button
        title="Press me"
        onPress={() => this.mqttConnect.send('test', "message send to channel test again")}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})*/






import React, { useState, useEffect } from 'react';
import { View, Text, Alert, RefreshControl, StyleSheet, Button } from 'react-native';
import Paho from './src/paho-mqtt'

/**
 * Watcher displays current washroom data
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} navigation
 * @return {Stack} 
 */

export default function App() {


    client = new Paho.Client(host = "io.adafruit.com", port = 443, clientId =  "web_" + parseInt(Math.random() * 100, 10));
    var options = {     
        useSSL: true,
        userName: "Kien1120",
        password: "aio_heNu56NaI8yoBXbqf6FlPCSlBOLl",
        keepAliveInterval: 60,
        onSuccess: onConnect,
        onFailure: onFail
    };
    client.connect(options);

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
    }

    function onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
            console.log("onConnectionLost:" +  responseObject.errorMessage);
        }
    }   

    client.onMessageArrived = onMessageArrived;     
    client.onConnectionLost = onConnectionLost; 

    return (
      <View style={styles.container}>
        <Text>react_native_mqtt</Text>
        <Button
          title="Press me"
        />
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
