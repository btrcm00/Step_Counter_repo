import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import Paho from './src/paho-mqtt'


var data;
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
//
  const [Step, setStep] = useState('0'); 

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
    setStep(message.payloadString);    //setStep_Count(message.payloadString);
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
    <Text>react_native_mqtt:{Step}</Text>

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