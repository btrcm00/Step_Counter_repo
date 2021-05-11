import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
export default function RegisterScreen({navigation}) {
	return (
		<View style={{ flex: 1,backgroundColor:'pink', alignItems: 'center', justifyContent: 'center' }}>
        <Button
            title = "Login"
            mode="outlined"
            onPress={() => navigation.navigate('LoginScreen')}
        />
        </View>
	);
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
})