import React from 'react';
import {Text,StyleSheet,View,Dimensions, Animated, Button, Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconButton} from 'react-native-paper';
import Paho from '../src/paho-mqtt'
import firebase from '../components/FirebaseConfig'
var messageArrived = "on_shake";
var dataChange = false;
var runApp = false;
var count = 0;
function mqtt_connect() {
  var client;
  client = new Paho.Client('io.adafruit.com', 443, 'web_' + parseInt(Math.random() * 100, 10));
  var options = {     
    useSSL: true,
    // userName: 'Kien1120',
    // password: 'aio_heNu56NaI8yoBXbqf6FlPCSlBOLl',
    userName: 'CSE_BBC1',
    password: 'aio_lubo29QRBLOP6OoDkQ5RDsmUSukr',
    keepAliveInterval: 60,
    onSuccess: onConnect,
    onFailure: onFail
  };
  client.connect(options);
``
  //const [Step, setStep] = useState('0'); 

  function onConnect() {
    console.log("Connected!");
    client.subscribe('CSE_BBC1/feeds/bk-iot-accelerometer');  
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
    //setStep(message.payloadString);    //setStep_Count(message.payloadString);
    //data = message.payloadString;
    // data = JSON.parse(message.payloadString);
    // data = data.id;
    // dataChange = true;
    var mes = JSON.parse(message.payloadString);
    messageArrived = mes.data;
    if(messageArrived != "on_shake"){
      count+=1;
      messageArrived = "on_shake";
      dataChange = true;
    }
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

const HomeStack = createStackNavigator();
var height = Dimensions.get('window').height;
function HomeStackScreen({navigation,route}){
  const [Step, setStep] = React.useState('0'); 
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  var target = 10;
  db.collection('User').doc(user.uid).get().then((doc)=>{
    if (doc.exists) {
      target = doc.data().target;
      console.log(target);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });
  const kcal = (Step * 0.04).toFixed(2);
  const m = (Step * 0.762).toFixed(2);
  console.log(Step)
  console.log(target)
  var width = (Step<=target)?(((Step/target)*100).toFixed(2).toString(10) + '%'):'100%';
  if(Step==target){

      var client2;
      client2 = new Paho.Client('io.adafruit.com', 443, '');
      var options2 = {     
        useSSL: true,
        // userName: 'Kien1120',
        // password: 'aio_heNu56NaI8yoBXbqf6FlPCSlBOLl',
        userName: 'CSE_BBC',
        password: 'aio_EgXK400rXGsfdspfNyuk4Y2JZZMR',
        keepAliveInterval: 60,
        onSuccess: onConnect1,
        onFailure: onFail1
      };
      client2.connect(options2);
    ``
      //const [Step, setStep] = useState('0'); 
    
      function onConnect1() {
        console.log("Connected Speaker!");
        var speaker={
          "id":"2",
          "name":"SPEAKER",
          "data":"400",
          "unit":""
          };
          var json_string = JSON.stringify(speaker);
          client2.publish('CSE_BBC/feeds/bk-iot-speaker',json_string)
      }
      function onFail1(context) {
        console.log(context);
        console.log("Connection failed!");
        Alert.alert('Failure to Connect',
          "Unable to connect to host. Try again later.",
          [
            { text: "OK" }
          ],
        )
      }
      

    Alert.alert(
      'Congratulation!!!','Your target is completed',
      [
        {text:'OK',onPress:()=>onHandleTargetCompleted()},
        {text: 'Update target',onPress:()=>{navigation.navigate('Profile')}}
      ]
    )
  }
  const onHandleTargetCompleted = () =>{
    navigation.navigate('Home')
  }
  React.useEffect(() => {
    const interval = setInterval(() => {
      if(dataChange){
        dataChange = false
        setStep(count);
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return(
    <View style={{flex:1, backgroundColor: '#C4DFE6',}}>
        <View style={{ flex: 1.2,alignItems:'center',}}>
          <Text h1 style={styles.bigBlack}>Today</Text>
          <View style={styles.todayBox}>
            <View>
              <Text style={styles.todayTitleText}>Steps</Text>
            </View>
            <View>
              <Text style={styles.todayBodyText}>{Step} steps</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1,}}>
            <View style = {{flex:1,alignItems:'center'}}>
              <Text h2 style={styles.bigBlack}>Process</Text>
              <View style={styles.progressBar}>
                <Animated.View style={[styles.absoluteFill,{width}]}/>
                <IconButton
                  icon="run"
                  color={'black'}
                  size={height/13}
                  onPress={() => {
                    mqtt_connect();
                    runApp = true;
                  }}
                />
              </View>
              <Text>{width}</Text>
            </View>
        </View>
        <View style={{flex:2.5, alignItems:'center',}}>
          <Text h3 style={styles.bigBlack}>More</Text>
          <View style={styles.todayBox}>
            <View>
              <Text style={styles.todayTitleText}>Walking + Running Distance</Text>
            </View>
            <View>
              <Text style={styles.todayBodyText}>{m} m</Text>
            </View>
          </View>
          <View style={styles.todayBox}>
            <View>
              <Text style={styles.todayTitleText}>Active Energy</Text>
            </View>
            <View>
              <Text style={styles.todayBodyText}>{kcal} kcal</Text>
            </View>
          </View>
        </View>
       </View>
      
  );
};
export default function HomeScreen({navigation}){
    return (
      <HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#336B87',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="HomeSc" component={HomeStackScreen} options={{
        title:'Step Counter',
        headerLeft: () => (
            <Icon.Button name="menu" size={25} backgroundColor="#336B87" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
    </HomeStack.Navigator>
      );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button:{
    color:'red'
  },
  bigBlack: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  todayBox: {
    flex:1,
    marginBottom:8,
    alignItems:'center',
    backgroundColor:'white',
    justifyContent:'center',
    width: '95%',
    borderRadius: 10,
    shadowColor: "black",
		shadowOffset: {
		width: -5,
		height: 6,
		},
		shadowOpacity: 0.23,
		elevation: 4,
  },
  todayTitleText: {
    fontWeight: 'bold',
    color: '#336B87',
    textAlign: 'left',
    fontSize: 20,
    marginBottom: 10
  },
  todayBodyText: {
    color: '#000000',
    fontSize: 16,
  },
  progressBar: {
    height: height/12,
    width: '85%',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 15,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "black",
		shadowOffset: {
		width: -5,
		height: 5,
		},
		shadowOpacity: 0.23,
		elevation: 4,
  },
  absoluteFill:
  {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#336B87",
    borderRadius:15
  }
}
)