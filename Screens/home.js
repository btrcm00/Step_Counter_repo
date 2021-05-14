import React from 'react';
import {StyleSheet,View,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();
function HomeStackScreen({navigation}){
    return(
      <View style={{ flex: 1,backgroundColor:'#b0e0e6', alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Go to ChangePassword!"
            onPress={() => navigation.navigate('Changepass')}
          />
          <Button
            title="Go to Register!"
            onPress={() => navigation.navigate('Register')}
          />
          <Button
            title="Go to Login!"
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            title="Go to LeaderBoard!"
            onPress={() => navigation.navigate('Leaderboard')}
          />
          <Button
            title="Go to Analytic!"
            onPress={() => navigation.navigate('Analytic')}
          />
        </View>
    );
};
export default function HomeScreen({navigation}){
    return (
      <HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#6699FF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="HomeSc" component={HomeStackScreen} options={{
        title:'Step Counter',
        headerLeft: () => (
            <Icon.Button name="menu" size={25} backgroundColor="#6699FF" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
    </HomeStack.Navigator>
      );
}
const styles = StyleSheet.create({
  button:{
    color:'red'
  }
})