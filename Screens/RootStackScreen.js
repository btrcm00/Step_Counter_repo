import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './login';
import RegisterScreen from './register';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator initialRouteName = "Login" headerMode='none'>
        <RootStack.Screen name="Login" component={LoginScreen}/>
        <RootStack.Screen name="Register" component={RegisterScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;
