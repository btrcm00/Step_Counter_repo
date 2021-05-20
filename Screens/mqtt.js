import React, { useState, useEffect, Component  } from 'react';
import { View, Text, Alert, StyleSheet, Button, ImageBackground } from 'react-native';
import Paho from './src/paho-mqtt'


var data = '0';
var dataChange = false;
var runApp = false;
function Mqtt() {

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

export default function Display(){
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


  return (
    <ImageBackground source={require('./assets/run_bg.png')} style={styles.container}>
    { runApp 
      ? <Text style={styles.stepFormat}>{Step}<Text style={styles.stepsFormat}> Steps</Text></Text>
      : <Text style={styles.buttonFormat}> <Button title="Connect" onPress={() => {
        Mqtt();
        runApp = true;
        }}/> </Text>
    }
    </ImageBackground>
  );

}










/*
return (
  <View style={styles.container}>
  <Button
    title="Press me"
    onPress={() => this.connect()}
  />
    
  <Text>react_native_mqtt:{this.state.count}</Text>
  </View>
)*/






const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  stepFormat: {
    fontSize: 80,
    fontWeight: 'bold',
    top: 200,
    color: 'white'
  },
  buttonFormat:{
    bottom: -200
  },
  stepsFormat:{
    fontSize: 30,
    color: 'white'
  }
})