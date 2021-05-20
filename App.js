import  React, { useState, useEffect, Component  } from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import 
  { 
    ChangepassScreen, 
    LeaderboardScreen, 
    MainTabScreen, 
    ProfileScreen,
    AnalyticScreen_calo,
    AnalyticScreen_steps,
    AnalyticScreen_km,
    HomeScreen,
  } from './Screens';
import { View, ActivityIndicator } from 'react-native';
import Paho from './src/paho-mqtt'
import {DrawerContent} from './Screens/DrawerContent';
import { AuthContext } from './components/context';
import RootStackScreen from './Screens/RootStackScreen';

const Drawer = createDrawerNavigator();

var data = '0';
var dataChange = false;
function Mqtt() {
  client = new Paho.Client(host = "io.adafruit.com", port = 443, clientId =  "web_" + parseInt(Math.random() * 100, 10));
  var options = {     
    useSSL: true,
    userName: "Kien1120",
    password: "aio_heNu56NaI8yoBXbqf6FlPCSlBOLl",
    keepAliveInterval: 60,
    onSuccess: onConnect,
    onFailure: onFail
  };
  client.connect(options);

  //const [Step, setStep] = useState('0'); 
  function onConnect() {
    console.log("Connected!");
    client.subscribe('Kien1120/feeds/test');  
  }

  function onFail(context) {
    console.log(context);
    console.log("Connection failed!");
    Alert.alert('Failure to Connect', 
      "Unable to connect to host. Try again later.",
      [
        { text: "OK" }
      ],
    )
  }
  
  function onMessageArrived(message) {
    console.log("Message Arrived:" + message.payloadString);
    navigation.navigate('Home11', {
      steps: message.payloadString,
    });
    //setStep(message.payloadString);    //setStep_Count(message.payloadString);
    data = message.payloadString;
    dataChange = true;

  } 

  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:" +  responseObject.errorMessage);
    }
  }   

  client.onMessageArrived = onMessageArrived;     
  client.onConnectionLost = onConnectionLost; 



  return (
    <Text>react_native_mqtt:</Text>
  )
}






const App=()=>{
  //const [isLoading, setIsLoading] = React.useState(true);
  //const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  const [Step, setStep] = useState('0'); 
  useEffect(() => {
    const interval = setInterval(() => {
      if(dataChange){
        dataChange = false
        setStep(data);
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);
  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      /* setUserToken('congminh');
      setIsLoading(false); */
      Mqtt()
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      /* setUserToken(null);
      setIsLoading(false); */
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      //setUserToken('congminh');
      //setIsLoading(false);
    }
  }));
  useEffect(() => {
    setTimeout(async() => {
      //setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if(loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  return(
    <AuthContext.Provider value = {authContext}>
      <NavigationContainer>
        { loginState.userToken !== null ? (
          <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name = "Home" component={MainTabScreen}/>
            <Drawer.Screen name = "Home11" component={HomeScreen}/>
            <Drawer.Screen name = "Profile" component = {ProfileScreen}/>
            <Drawer.Screen name="Leaderboard" component={LeaderboardScreen}/>
            <Drawer.Screen name="Changepass" component={ChangepassScreen}/>
            <Drawer.Screen name="MainTab" component={MainTabScreen}/>
            <Drawer.Screen name="Analytic_steps" component={AnalyticScreen_steps}/>
            <Drawer.Screen name="Analytic_km" component={AnalyticScreen_km}/>
            <Drawer.Screen name="Analytic_calo" component={AnalyticScreen_calo}/>
          </Drawer.Navigator>
        ):<RootStackScreen/>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
export default App;


