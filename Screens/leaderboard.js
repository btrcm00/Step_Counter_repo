import React from 'react';
import {StyleSheet,View,Button,Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();

function LeaderboardStack({navigation}){
    return(
        <View style = {styles.container}>
            <Text>Leader Board</Text>
        </View>
    );
};

export default function LeaderboardScreen({navigation}) {
	return (
		<HomeStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#CC3366',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="LeaderBoardSc" component={LeaderboardStack} options={{
            title:'LeaderBoard',
            headerLeft: () => (
                <Icon.Button name="leaderboard" size={25} backgroundColor="#CC3366" onPress={() => navigation.openDrawer()}></Icon.Button>
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