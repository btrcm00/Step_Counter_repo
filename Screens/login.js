import React from 'react';
import { Dimensions, Image, StyleSheet, View, Text, Alert} from 'react-native';
import { Button ,TextInput } from 'react-native-paper';
import {AuthContext} from '../components/context';
var width = Dimensions.get('window').width;
//import {Users} from '../Screens/Users'
const Users = [
    {
        id: 1, 
        email: 'user1@email.com',
        username: 'duykien', 
        password: 'duykien', 
    },
    {
        id: 2, 
        email: 'user2@email.com',
        username: '', 
        password: '', 
    },
    {
        id: 3, 
        email: 'testuser@email.com',
        username: 'chibuu', 
        password: 'chibuu', 
    },
    {
        id: 4, 
        email: 'testuser@email.com',
        username: 'thanhphat', 
        password: 'thanhphat', 
    },
    {
        id: 5, 
        email: 'testuser@email.com',
        username: 'duythong', 
        password: 'duythong', 
    },
];
export default function LoginScreen({navigation}) {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    //const [email,setEmail] = React.useState('')
    //const [password, setPassword] = React.useState('')
    const {signIn} = React.useContext(AuthContext);
    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }
    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }
    const loginHandle = (userName, password) => {
        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );
        if ( data.username.length == 1 || data.password.length == 1 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }
        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }
    return (
      <View style={styles.container}>
            <View style={{flex:2,justifyContent: 'center',alignItems: 'center'}}>
                <View style={styles.container1}>
                <Image
                    style = {styles.image}
                    source={require('./StepCounterImg.png')}
                />
                </View>
            </View>
            <View style = {{flex:1, justifyContent:'center'}}>
                <View style={{flex:1,justifyContent:'center'}} >
                    <TextInput 
                        mode="outlined"
                        label="Email"
                        clearButtonMode="always"
                        style = {styles.input}
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                        placeholder="Email"
                    />
                </View>
                <View style={{flex:1,justifyContent:'center'}} >
                    <TextInput 
                        mode="outlined"
                        secureTextEntry={true}
                        clearButtonMode = 'always'
                        style = {styles.input}
                        label="Password"
                        onChangeText={(val) => handlePasswordChange(val)}
                        placeholder="Password"
                    />
                </View>
                
            </View>
        
            <View style ={{flex:2,flexDirection: 'column',alignItems:'center',justifyContent:'space-around'}}>
                <Button  onPress={() => {loginHandle( data.username, data.password )}} width = '50%' color ='#3498DB' mode = "contained">
                    <Text style={{color:"white"}}>Login</Text>
                </Button>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:16}}>Not Registered yet ?</Text>
                    <Button onPress ={() => navigation.navigate('Register')} color ='#3498DB' >
                        <Text style={{color:"black"}}>sign up</Text>
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
        flex: 2,
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
    imageHeader: {
		height:'20%',
		width:'20%',
		resizeMode:'contain'
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
})
