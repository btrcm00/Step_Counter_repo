import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function LoginScreen({navigation}) {
	return (
		<View style={{ flex: 1,backgroundColor:'pink', alignItems: 'center', justifyContent: 'center' }}>
        <Button
            title = "Sign Up"
            mode="outlined"
            onPress={() => navigation.navigate('Register')}
        />
        <Button
            title="Go to Home!"
            onPress={() => navigation.navigate('Home')}
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