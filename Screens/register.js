import React, {useState} from 'react'
import { Dimensions, Image,StyleSheet,View ,Text, Alert} from 'react-native'
import { Button,TextInput} from 'react-native-paper'
import   firebase  from '../components/FirebaseConfig';
var width = Dimensions.get('window').width;
export default function RegisterScreen({navigation}) {
    const [data, setData] = useState({
        displayName:'',
        email: '',
        password: '',
        cpassword:''
    });
    var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
      
        today = dd + '-' + mm + '-' + yyyy;
        String(today);

    const updateFirestore = (uid,name,email,pass) =>{

        const db = firebase.firestore();
        db.collection('User').doc(uid).set({
            name: name,
            email:email,
            password: pass,
            stepsOfday: 0,
            target: 1200,
        }).then((snapshot) =>{
            console.log('ok')
        }).catch((error)=>{
            console.log(error.message)
        });
        db.collection('User').doc(uid).collection('Step').doc(today).set({
            Step: 0
        }).then(()=>{
            console.log('check')
        }).catch((error)=>{
            console.log(error.message)
        })
    }
    
    

    const signUp = async () => {
        if(data.password != data.cpassword){

            Alert.alert(
                'Opps!','Password and confirm password does not match!',
                [
                    {text: 'Again'}
                ]
            )
        }
        else if(data.displayName==''){
            Alert.alert(
                'Opps!','Please input',
                [
                    {text: 'Add name'}
                ]
            )
        }
        else{
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then(()=>{
                const user = firebase.auth().currentUser;
                user.updateProfile({displayName:data.displayName});
                updateFirestore(user.uid,data.displayName,data.email,data.password);
                Alert.alert(
                    'Successfully!','',
                    [
                        {text: 'Go to Login!',onPress:()=>{navigation.navigate('Login')}}
                    ],
                    {cancelable:false}
                )
            })
            .catch((error)=>{
                Alert.alert(
                    "Opps!",error.message,
                    [
                        {text: 'OK'}
                    ],
                )
            })
        }
        

    }
    return (
    <View style={styles.container}>
        <View style={{flex:5,justifyContent: 'center',alignItems: 'center'}}>
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
                        label="Name"
                        style = {styles.input}
                        clearButtonMode = 'always'
                        onChangeText={(val)=>setData({...data,displayName:val})}
                        placeholder="Name"
                    />
                </View>
                <View style={{flex:1,justifyContent:'center'}} >
                    <TextInput
                        mode="outlined"
                        label="Email"
                        style = {styles.input}
                        secureTextEntry={false}
                        clearButtonMode = 'always'
                        onChangeText={(val)=>setData({...data,email:val})}
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
                        onChangeText={(val)=>setData({...data,password:val})}
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
                        onChangeText={(val)=>setData({...data,cpassword:val})}
                        placeholder="Confirm password"
                    />

                </View>
            </View>
        </View>
        
        <View style ={{ flex:4,flexDirection:'coloumn',alignItems:'center', justifyContent:'space-around'}}>
            <View style = {{flex:2, alignItems:'center', justifyContent:'center'}}>
                <Button onPress = {() => signUp()} color ='#3498DB' mode = "contained" style = {styles.button}>
                    <Text style={{color:"white"}}>Register Now!</Text>
                </Button>

                {/*tao ham tao bang Step trong user*/}
            
            </View>
            <View style = {{flex:2, flexDirection:'row',alignItems:'center'}}>
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
