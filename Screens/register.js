import React ,{useContext} from 'react'
import { ScrollView,StyleSheet,View ,Text} from 'react-native'

import { Button,TextInput} from 'react-native-paper'


export default function RegisterScreen({navigation}) {
    const [email,setEmail] = React.useState('')
    const [password,setPassword]= React.useState('')
    const [cpassword,setConfirmPassword]= React.useState('')
    

    return <ScrollView style={styles.screen}>

        <TextInput
            mode="outlined"
            label="Email"
            style = {{marginTop:80, marginBottom: 30}}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            />

        <TextInput
            mode="outlined"
            label="Password"
            secureTextEntry={true}
            style = {{marginBottom: 30}}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            />

        <TextInput
            mode="outlined"
            label="Confirm password"
            secureTextEntry={true}
            style = {{marginBottom: 30}}
            value={cpassword}
            onChangeText={text => setConfirmPassword(text)}
            placeholder="Confirm password"
            />
    
        <Button onPress = {() =>navigation.navigate('LoginScreen')} width = '60%' color ='#3498DB' mode = "contained" style = {{marginLeft: 70,marginRight: 50,marginTop:30, marginBottom: 10}}><Text style={{color:"white"}}>Register Now!</Text></Button>
        <View style ={{flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
            <Text>Already Registered ?</Text>
            <Button onPress ={() => navigation.navigate('LoginScreen')} color ='#3498DB'><Text style={{color:"black"}}>Login</Text></Button>
        </View>
        

    </ScrollView>
}

const styles = StyleSheet.create({
    screen:{
        padding:20
    }
})
