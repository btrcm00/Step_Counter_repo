import React from 'react';
import {StyleSheet,View,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();
function HomeStackScreen(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{flex:1}}>
            <View style = {{flex: 1,borderBottomColor:'black', borderBottomWidth:1}}/>
          </View>
          <View style={{flex:1}}>

          </View>
          <View style={{flex:2}}>

          </View>
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