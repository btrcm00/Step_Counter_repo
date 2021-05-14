import React from 'react'
import { ScrollView,Image, StyleSheet, View, Text} from 'react-native'
import { Button ,TextInput } from 'react-native-paper'

export default function LoginScreen({navigation}) {
    const [email,setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    
    
    return (
      <ScrollView style={styles.screen}>

        <TextInput 
        mode="outlined"
        label="Email"
        style = {{marginTop:100, marginBottom: 30}}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Email"
        />

        <TextInput 
        mode="outlined"
        secureTextEntry={true}
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        />
       
        <Button onPress = {() => navigation.navigate('HomeScreen')} width = '60%' color ='#3498DB' mode = "contained" style = {{marginLeft: 65,
              marginRight: 50,marginTop:30, marginBottom: 20}
            }>
            <Text style={{color:"white"}}>Login</Text></Button>
            
        <View style ={{flexDirection: 'row',alignItems:'center',justifyContent:'space-around'}}>
            <Text>Not Registered yet ?</Text>
            <Button onPress ={() => navigation.navigate('RegisterScreen')} color ='#3498DB' ><Text style={{color:"black"}}>signup</Text></Button>
        </View>
    
        </ScrollView>
);
}

const styles = StyleSheet.create({
    screen:{
        padding:40
       
    },
    imageHeader: {
		height:'20%',
		width:'20%',
		resizeMode:'contain'
	},
})
