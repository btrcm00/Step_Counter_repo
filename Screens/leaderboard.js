import React from 'react';
import {StyleSheet,View,Image,Text, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LeaderBoard from 'leaderboard';
import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();
function LeaderboardStack({navigation}){
    state = {
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
const ordinal_suffix_of = (i) => {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}