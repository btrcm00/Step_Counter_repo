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
import React, {useEffect} from 'react'
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

    onMQTTLost = () => {
        console.log('App onMQTTLost')
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
})