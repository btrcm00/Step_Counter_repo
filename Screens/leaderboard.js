import React from 'react';
import {StyleSheet,View,Image,Text, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LeaderBoard from 'react-native-leaderboard';
import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();

const image = { uri: "https://reactjs.org/logo-og.png" }
state = {
    data: [
        {userName: 'Joe', highScore: 52},
        {userName: 'Jenny', highScore: 120},
        {userName: 'Joe', highScore: 52},
        {userName: 'Jenny', highScore: 120},
        {userName: 'Joe', highScore: 52},
        {userName: 'Jenny', highScore: 120},
        {userName: 'Joe', highScore: 52},
        {userName: 'Jenny', highScore: 120},
        {userName: 'Joe', highScore: 52},
        {userName: 'Jenny', highScore: 120},
        {userName: 'Joe', highScore: 52},
        {userName: 'Jenny', highScore: 120},
        {userName: 'Joe', highScore: 52},
        {userName: 'Jenny', highScore: 120},
        {userName: 'Joe', highScore: 52},
        {userName: 'Jenny', highScore: 120},

    ]
}
function LeaderboardStack(){
    return(
        <View style = {styles.container}>
            <View style={{flex:3}}>
                <View style={{
                    flex:1, justifyContent: 'center', alignItems: 'center',
                    marginBottom: 15, marginTop: 20
                }}>
                    <Text style={{fontSize: 25, flex: 1, textAlign: 'right'}}>
                        {ordinal_suffix_of(1)}
                    </Text>
                    <Image style={{ flex: .66, height: 60, width: 60, borderRadius: 60 / 2 }}
                        source={require('./StepCounterImg.png')} />
                    <Text style={{ fontSize: 25, flex: 1}}>
                        {69}pts
                    </Text>
                </View>
            </View>
            <View style = {{flex:7}}>
                <ImageBackground source = {require('./StepCounterImg.png')} style = {styles.imageBackground}>
                    <LeaderBoard
                        data = {state.data}
                        sortBy = "highScore"
                        labelBy = "userName"
                    />
                </ImageBackground>
                
            </View>
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