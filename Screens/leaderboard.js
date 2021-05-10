import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default function LeaderboardScreen({navigation}) {
	return (
		<View style = {styles.container}>
            <Text>Leader Board</Text>
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