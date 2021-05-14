import React from 'react';
import {StyleSheet,View,Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();
function DashBoardStack({navigation}){
    return(
        <View style = {styles.container}>
            <Text>Dashboard</Text>
        </View>
    );
};
export default function DashboardScreen({navigation}) {
	return (
		<HomeStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#694fad',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="DashBoardSc" component={DashBoardStack} options={{
            title:'DashBoard',
            headerLeft: () => (
                <Icon.Button name="dashboard" size={25} backgroundColor="#694fad" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
        </HomeStack.Navigator>
	);
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
})