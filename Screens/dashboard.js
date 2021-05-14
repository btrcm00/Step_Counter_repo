import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default function DashboardScreen({navigation}) {
	return (
		<View style = {styles.container}>
            <Text>Dashboard hello world</Text>
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