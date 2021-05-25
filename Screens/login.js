import React from 'react';
import { Dimensions, Image, StyleSheet, View, Text, Alert} from 'react-native';
import { Button ,TextInput } from 'react-native-paper';
import {AuthContext} from '../components/context';
var width = Dimensions.get('window').width;
import {firebaseApp} from './firebaseconfig'
export default class LoginScreen extends React.Component{

  constructor(props){
    super(props)
    this.state={
      email: '',
      password: ''
    }
  }

  static navigationOptions = {
      title: 'Sign in',
      header: null
  }

  createNewAccount = () => {
      this.props.navigation.navigate('Register')
    }

  signInUser = (email, password) => {
    console.log(this.state)
    
    if(email === '' && password === ''){
      Alert.alert('Please enter your email and password!')
    }
    else if(email === '' || password === ''){
      if(email==='') { Alert.alert('Please enter your email!') }
      else { Alert.alert('Please enter your password!') }
    }
    else{
      firebaseApp.auth()
      .signInWithEmailAndPassword(email,password)
      .then(()=>{this.props.navigation.nevigate('Home')} )
      .catch(error => {
        Alert.alert(
          'Account with this email does not exist!',
          'Register now!',
          [
            {
              text: 'Ok', onPress: () => {console.log('Ok tapped')} 
            }
          ]
        )
      })
    }
  }
  render(){
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
              <View style = {{flex:1,justifyContent:'center'}} >
                  <TextInput 
                      mode = "outlined"
                      label = "Email"
                      clearButtonMode = "always"
                      style = {styles.input}
                      onChangeText = {
                          email => this.setState({email})
                      }
                      value = {this.state.email}
                      placeholder = "Email"
                  />
              </View>
              <View style={{flex:1,justifyContent:'center'}} >
                  <TextInput 
                      mode = "outlined"
                      secureTextEntry = {true}
                      clearButtonMode = 'always'
                      style = {styles.input}
                      label = "Password"
                      onChangeText = {
                          password => this.setState({password})
                      }
                      value = {this.state.password}
                      placeholder = "Password"
                  />
              </View>
              
          </View>
      
          <View style ={{flex:2,flexDirection: 'column',alignItems:'center',justifyContent:'space-around'}}>
              <Button  onPress={ ()=>{this.signInUser(this.state.email, this.state.password)} } width = '50%' color ='#3498DB' mode = "contained">
                  <Text style={{color:"white"}}>Login</Text>
              </Button>
              <View style={{flexDirection:'row'}}>
                  <Text style={{fontSize:16}}>Not Registered yet ?</Text>
                  <Button  onPress={()=>{this.createNewAccount()}} color ='#3498DB' >
                      <Text style={{color:"black"}}>sign up</Text>
                  </Button>
              </View>
          </View>
  
      </View>
  );
}
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