import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './home';
import ProfileScreen from './profile';
import LeaderboardScreen from './leaderboard';
import AnalyticScreen from './analytics_step';
import HistoryScreen from './history'

const Tab = createMaterialBottomTabNavigator();

export default function MainTabScreen(){
    return(
    <Tab.Navigator
      initialRouteName = "Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#336B87',
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
          tabBarColor: '#CC9999',
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Analytic"
        component={AnalyticScreen}
        options={{
          tabBarLabel: 'Analytic',
          tabBarColor: '#CC99CC',
          tabBarIcon: ({ color }) => (
            <Icon name="analytics" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Leader Board"
        component={LeaderboardScreen}
        options={{
          tabBarLabel: 'LeaderBoard',
          tabBarColor: '#CC3366',
          tabBarIcon: ({ color }) => (
            <Icon name="leaderboard" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarColor: '#CDC9A5',
          tabBarIcon: ({ color }) => (
            <Icon name="history" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    );
};