import { StyleSheet, View, Image, TextInput, Button, Header, Paragraph } from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}){
    return (
        <View style={{ flex: 1,backgroundColor:'pink', alignItems: 'center', justifyContent: 'center' }}>
          <Button style={{color:'red'}}
            mode="contained"
            title = "Login"
            onPress={() => navigation.navigate('LoginScreen')}
        />
        <Button
            title = "Sign Up"
            mode="outlined"
            onPress={() => navigation.navigate('RegisterScreen')}
        />
        <Button
            title="Go to Home!"
            onPress={() => navigation.navigate('HomeScreen')}
          />
        </View>
      );
}
const styles = StyleSheet.create({
  button:{
    color:'red'
  }
})