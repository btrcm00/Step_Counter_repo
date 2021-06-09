import React, {useState} from 'react';
import { Dimensions, Image, StyleSheet, View, Text, Alert} from 'react-native';
import { Button ,TextInput } from 'react-native-paper';
var width = Dimensions.get('window').width;
import firebase from '../components/FirebaseConfig'
export default function LoginScreen({navigation}) {
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const signIn = async () => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(()=>{
            Alert.alert(
                'Successfully!','',
                [
                    {text: 'Go to Home',onPress:()=>{navigation.navigate('Home')}}
                ],
                {cancelable:false}
            )
        })
        .catch((error) => {
            Alert.alert(
                "Opps!",error.message,
                [
                    {text: 'OK', onPress: () => {navigation.navigate('Login')}}
                ],
            )
        })
    }
    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                email: val,
            });
        } else {
            setData({
                ...data,
                email: val,
            });
        }
    }
    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
            });
        } else {
            setData({
                ...data,
                password: val,
            });
        }
    }
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;
    String(today);

    var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var n = weekday[d.getDay()];
        const db = firebase.firestore();
        const user = firebase.auth().currentUser;
        db.collection('User').doc(user.uid).collection('Step').doc(today).update({
            dayOfWeek: n
        })

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
                <Button  onPress={() => signIn()} width = '50%' color ='#3498DB' mode = "contained">
                    <Text style={{color:"white"}}>Login</Text>
                </Button>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:16}}>Not Registered yet ?</Text>
                    <Button onPress ={() => navigation.navigate('Register')} color ='#3498DB' >
                        <Text style={{color:"#3498DB"}}>Sign up</Text>
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
		height: 50,
		marginLeft:width/7,
		marginRight:width/7,
	},
})