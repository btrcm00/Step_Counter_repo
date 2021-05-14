import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './home';
import ProfileScreen from './profile';
import DashboardScreen from './dashboard';
import LeaderboardScreen from './leaderboard';

const Tab = createMaterialBottomTabNavigator();

function MainTabScreen(){
    return(
    <Tab.Navigator
      initialRouteName = "Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Dash Board"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'DashBoard',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="dashboard" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Leader Board"
        component={LeaderboardScreen}
        options={{
          tabBarLabel: 'LeaderBoard',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="leaderboard" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    );
};

export default MainTabScreen;
