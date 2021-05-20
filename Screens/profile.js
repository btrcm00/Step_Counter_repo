import React from 'react';
import {StyleSheet,View,Button,ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();
function ProfileStack({navigation}){
    return(
        <View style={{flex:1}}>
        <ImageBackground source={require('../Screens/run_bg.png')} style={styles.container}>
        <Button
            title = "Change Password"
            color='red'
            mode="outlined"
            onPress={() => navigation.navigate('Changepass')}
        />
        </ImageBackground>
        
        </View>
    );
};
export default function ProfileScreen({navigation}) {
	return (
		
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#CC9999',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="ProfileSc" component={ProfileStack} options={{
            title:'Profile',
            headerLeft: () => (
                <Icon.Button name="account-circle" size={25} backgroundColor="#CC9999" onPress={() => navigation.openDrawer()}></Icon.Button>
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