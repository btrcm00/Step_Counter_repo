import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default function RegisterScreen({navigation}) {
	return (
		<View style = {styles.container}>
            <Text>register</Text>
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