import React from 'react'
import { Dimensions, Image,StyleSheet,View ,Text} from 'react-native'
import { Button,TextInput} from 'react-native-paper'
import   firebase   from '../components/FirebaseConfig';
var width = Dimensions.get('window').width;

export default function RegisterScreen({navigation}) {
    const [email,setEmail] = React.useState('')
    const [password,setPassword]= React.useState('')
    const [cpassword,setConfirmPassword]= React.useState('')
    const signUp = async () => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
            navigation.navigate('Login');
        } catch (err) {
            setError(err.message);
        }

    }
    return (
    <View style={styles.container}>
        <View style={{flex:6,justifyContent: 'center',alignItems: 'center'}}>
            <View style={styles.container1}>
            <Image
                style = {styles.image}
                source={require('./StepCounterImg.png')}
            />
            </View>
        </View>
        <View style={{flex:6,}}>
            <View style={{flex:4,justifyContent:'center'}}>
                <View style={{flex:1,justifyContent:'center'}} >
                    <TextInput
                        mode="outlined"
                        label="Email"
                        style = {styles.input}
                        clearButtonMode = 'always'
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email"
                    />
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <TextInput
                        mode="outlined"
                        label="Password"
                        secureTextEntry={true}
                        style = {styles.input}
                        clearButtonMode = 'always'
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                    />
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <TextInput
                        mode="outlined"
                        label="Confirm password"
                        clearButtonMode = 'always'
                        secureTextEntry={true}
                        style = {styles.input}
                        value={cpassword}
                        onChangeText={setConfirmPassword}
                        placeholder="Confirm password"
                    />

                </View>
            </View>
            {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
            }
        </View>
        
        <View style ={{ flex:4,flexDirection:'coloumn',alignItems:'center', justifyContent:'space-around'}}>
            <View style = {{flex:2, alignItems:'center', justifyContent:'center'}}>
                <Button onPress = {() => signUp()} color ='#3498DB' mode = "contained" style = {styles.button}>
                    <Text style={{color:"white"}}>Register Now!</Text>
                </Button>
            </View>
            <View style = {{flex:1, flexDirection:'row', justifyContent:'center'}}>
                <Text>Already Registered ?</Text>
                <Button onPress ={() => navigation.navigate('Login')} color ='#3498DB'>
                    <Text>Login</Text>
                </Button>
                
            </View>
            
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    container:{
		flex:1,
		flexDirection:'column',
	},
	container1: {
		alignItems:'center',
		justifyContent:'center',
		shadowColor: "#000",
		shadowOffset: {
		width: -5,
		height: 10,
		},
		shadowOpacity: 0.23,
		elevation: 4,
		height:108,
		borderRadius:20,
		width:108,
	},
	image: {
		resizeMode: 'center',
		height:'100%',
		width:'100%'
	},
    input:{
		height: 40,
		marginLeft:width/6,
		marginRight:width/6,
	},
    passText:{
		fontSize: 20,
		marginLeft: width/6,
	},
    button: {
		alignItems: "center",
		justifyContent:'center',
		backgroundColor:'dodgerblue',
	},
})
