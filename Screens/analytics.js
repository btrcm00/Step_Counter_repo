import React from 'react';
import {SafeAreaView,Text,View,StyleSheet,Dimensions,ScrollView,ImageBackground, Button} from 'react-native';
import {LineChart,BarChart} from 'react-native-chart-kit';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();
import firebase from '../components/FirebaseConfig'
//import { get } from 'core-js/fn/reflect';

function AnalyticStack_steps({navigation}){
  function Checkday(s) {
    var date = new Date();
    var day = date.getDay();
    switch (day) {
      case 0:       //chủ nhật
          const Step_cn = s;
          km_cn = (Step_cn * 0.762).toFixed(2);
          cal_cn = (Step_cn * 0.04).toFixed(2);  break;
      case 1:       //thứ 2
          const Step_t2 = s; 
          km_t2 = (Step_t2 * 0.762).toFixed(2);
          cal_t2 = (Step_t2 * 0.04).toFixed(2);  break;
      case 2:       //thứ 3
          const Step_t3 = s;
          km_t3 = (Step_t3 * 0.762).toFixed(2);
          cal_t3 = (Step_t3 * 0.04).toFixed(2);  break;
      case 3:     //thứ 4
          const Step_t4 = s;
          km_t4 = (Step_t4 * 0.762).toFixed(2);
          cal_t4 = (Step_t4 * 0.04).toFixed(2);  break;
      case 4:   //thứ 5
          const Step_t5 = s;
          km_t5 = (Step_t5 * 0.762).toFixed(2);
          cal_t5 = (Step_t5 * 0.04).toFixed(2);  break;
      case 5:   //thứ 6
          const Step_t6 = s;
          km_t6 = (Step_t6 * 0.762).toFixed(2);
          cal_t6 = (Step_t6 * 0.04).toFixed(2);  break;
      case 6:   //thứ 7
          const Step_t7 = s;
          km_t7 = (Step_t7 * 0.762).toFixed(2);
          cal_t7 = (Step_t7 * 0.04).toFixed(2);
    }
  }
String(Step_t2);
String(Step_t3);
String(Step_t4);
String(Step_t5);
String(Step_t6);
String(Step_t7);
String(Step_cn);


  var curr = new Date;
  var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
  var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay()+6));
  
  var user = firebase.auth().currentUser;

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  // var time = today.toLocaleTimeString();

  today = dd + '-' + mm + '-' + yyyy;
  String(today);

  const db = firebase.firestore();
  const local_step = db.collection('User').doc(user.uid).collection('Step').doc(today).then((snapshot) =>{
      const STEP = 0;
      snapshot.forEach((doc) =>{
      STEP.where(doc(today), '==', firstday).get()(
          Checkday(STEP)
        )  
      })
  })
  var [step, setSTEP] = React.useState();
  //const snapshot = local_step.where(doc, '==', firstday).get();
  
 
  const MyBarChart_step = () => {
    return (
      <>
      <ImageBackground style={styles.Background1}>
        <Text style={styles.header}>Steps ({firstday} - {lastday}) </Text>
        <ScrollView horizontal={true}>
        <BarChart
          data={{
            labels:
              ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Sartuday','Sunday'],
            datasets: [
              {
                data: [ Step_t2, 
                        Step_t3, 
                        Step_t4, 
                        Step_t5, 
                        Step_t6, 
                        Step_t7, 
                        Step_cn
                      ],
              },
            ],
          }}
          width={ 500}  // Dimensions.get('window').width
          height={300}
          chartConfig={{
            backgroundColor: '#a8c6fa',
            backgroundGradientFrom: '#a8c6fa',
            backgroundGradientTo: '#a8c6fa',
            decimalPlaces: 0,
          
            color: (opacity = 0) => `rgba(03, 30, 75, 0.7)`,
            style: {
              borderRadius: 0,
            },
          }}

          style={{
            marginVertical: 0,
            marginHorizontal: 0,
            borderRadius: 0,
          }}
        />
        </ScrollView>
      </ImageBackground>
      </>
    );
  };
  
 

  const MyBarChart_km = () => {
    //const kcal = (Step * 0.04).toFixed(2);
    //const m = (Step * 0.762).toFixed(2);

    return (
      <>
      <ImageBackground style={styles.Background1}>
        <Text style={styles.header}>Km ({firstday} - {lastday})</Text>
        <ScrollView horizontal={true}>
        <BarChart
          data={{
            labels:
              ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Sartuday','Sunday'],
            datasets: [
              {
                data: [ km_t2, 
                        km_t3, 
                        km_t4, 
                        km_t5, 
                        km_t6, 
                        km_t7, 
                        km_cn
                      ],
              },
            ],
          }}
          width={ 500}  // Dimensions.get('window').width
          height={300}
          chartConfig={{
            backgroundColor: '#a8c6fa',
            backgroundGradientFrom: '#a8c6fa',
            backgroundGradientTo: '#a8c6fa',
            decimalPlaces: 0,
          
            color: (opacity = 0) => `rgba(03, 30, 75, 0.7)`,
            style: {
              borderRadius: 0,
            },
          }}

          style={{
            marginVertical: 0,
            marginHorizontal: 0,
            borderRadius: 0,
          }}
        />
        </ScrollView>
      </ImageBackground>
      </>
    );
  };

  


  const MyBarChart_calo = () => {
    //const kcal = (Step * 0.04).toFixed(2);
    //const m = (Step * 0.762).toFixed(2);

    
   
    return (
      <>
      <ImageBackground style={styles.Background1}>
        <Text style={styles.header}>Calo ({firstday} - {lastday})</Text>
        <ScrollView horizontal={true}>
        <BarChart
          data={{
            labels:
              ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Sartuday','Sunday'],
            datasets: [
              {
                data: [ cal_t2, 
                        cal_t3, 
                        cal_t4, 
                        cal_t5, 
                        cal_t6, 
                        cal_t7, 
                        cal_cn
                      ],
              },
            ],
          }}
          width={ 500}  // Dimensions.get('window').width
          height={300}
          chartConfig={{
            backgroundColor: '#a8c6fa',
            backgroundGradientFrom: '#a8c6fa',
            backgroundGradientTo: '#a8c6fa',
            decimalPlaces: 0,
          
            color: (opacity = 0) => `rgba(03, 30, 75, 0.7)`,
            style: {
              borderRadius: 0,
            },
          }}

          style={{
            marginVertical: 0,
            marginHorizontal: 0,
            borderRadius: 0,
          }}
        />
        </ScrollView>
      </ImageBackground>
      </>
    );
  };

  return(
        <SafeAreaView style={{flex: 1}}>
        <ScrollView>
      <View style={styles.container}>
        <View style={styles.container2}>
        <TouchableOpacity 
        style={[styles.button,{marginRight:10}]}
        onPress={() => navigation.navigate('Analytic_calo')}
        >
          <Text>Calo</Text>
        </TouchableOpacity>
        </View>
        <View>
          <MyBarChart_step/>

          <MyBarChart_km/>

          <MyBarChart_calo/>

        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    );
};

  
export default function AnalyticScreen_steps({navigation}) {
	return (
      <HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#CC99CC',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="AnalyticSc" component={AnalyticStack_steps} options={{
        title:'Analytic',
        headerLeft: () => (
            <Icon.Button name="analytics" size={25} backgroundColor="#CC99CC" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
    </HomeStack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: 0,
      padding: 10,
    },

    container2: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
		  justifyContent: 'space-evenly',
    },

    button: {
      alignItems: "center",
		  justifyContent:'center',
		  textAlignVertical:'center',
		  width:120,
		  height:40,
		  borderRadius:10,
		  backgroundColor:'dodgerblue',
      marginTop: 10,
      marginBottom: 20
    },

    header: {
      textAlign: 'center',
      fontSize: 18,
      padding: 16,
      marginTop: 0,

    },
    Background1: {
      height: 350,
      backgroundColor: '#a8c6fa',
      marginBottom:50,
    },

    Background2: {
      height: 350,
      backgroundColor: '#a8c6fa',

    }
  });