import React from 'react';
import {StyleSheet,View,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();
function ProfileStack({navigation}){
    return(
        <View style={styles.container}>
        <Button
            title = "Sign Up"
            mode="outlined"
            onPress={() => navigation.navigate('Register')}
        />
        <Button
            title = "Change Password"
            mode="outlined"
            onPress={() => navigation.navigate('Changepass')}
        />
        </View>
    );
};
export default function ProfileScreen({navigation}) {
	return (
		
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#1f65ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="ProfileSc" component={ProfileStack} options={{
            title:'Profile',
            headerLeft: () => (
                <Icon.Button name="account-circle" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
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