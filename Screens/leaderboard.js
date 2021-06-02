import React from 'react';
import {StyleSheet,View,Image,Text, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Leaderboard from 'react-native-leaderboard';
const HomeStack = createStackNavigator();
function LeaderboardStack({navigation}){
    const state = {
        data: [
            {userName: 'Joe', highScore: 52},
            {userName: 'Jenny', highScore: 120},
            {userName: 'Thong', highScore: 33},
            {userName: 'TH', highScore: 333},
            //...
        ] //can also be an object of objects!: data: {a:{}, b:{}}
    }
    return(
        <Leaderboard 
        data={state.data} 
        sortBy='highScore' 
        labelBy='userName'/>
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
    imageBackground: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center"
	  },
})
