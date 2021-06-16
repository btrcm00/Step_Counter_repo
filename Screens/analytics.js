import React from 'react';
import {SafeAreaView,Text,View,StyleSheet,Dimensions,ScrollView,ImageBackground, Button} from 'react-native';
import {LineChart,BarChart} from 'react-native-chart-kit';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();
import firebase from '../components/FirebaseConfig'
// import { Checkbox } from 'react-native-paper';
// import { map } from 'core-js/core/array';
//import { get } from 'core-js/fn/reflect';

function AnalyticStack({navigation}){
  var Step_cn = 0;  var km_cn = 0;  var cal_cn = 0; 
  var Step_t2= 0;  var km_t2 = 0;  var cal_t2 = 0; 
  var Step_t3= 0;  var km_t3 = 0;  var cal_t3 = 0; 
  var Step_t4= 0;  var km_t4 = 0;  var cal_t4 = 0;  
  var Step_t5= 0;  var km_t5 = 0;  var cal_t5 = 0; 
  var Step_t6= 0;  var km_t6 = 0;  var cal_t6 = 0; 
  var Step_t7= 0;  var km_t7 = 0;  var cal_t7 = 0; 

  var today = new Date();

  var firstday = new Date(today.setDate(today.getDate() - today.getDay()));
  var lastday = new Date(today.setDate(today.getDate() - today.getDay()+6));
  
  var user = firebase.auth().currentUser;
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  // var time = today.toLocaleTimeString();
  today = dd + '-' + mm + '-' + yyyy;


  String(today);

 
//   const db = firebase.firestore();
//   const docref = db.collection('User').doc(user.uid).collection('Step')
//   var [STEP, setData] = React.useState(docref.Step);
//   var [DAY, setDay] = React.useState(docref.dayOfWeek);
//   db.collection('User').doc(user.uid).collection('Step')/* .orderBy('', 'desc') */.limit(7).onSnapshot((doc) =>{
//     console.log ("Get data"); 
//     /* snap.forEach((doc) =>{
//        dataStep.push({STEP: doc.data().Step, DAY: doc.data().dayOfWeek})  */ 
//        if (doc.exists) {
//         setData(doc.data().Step);
//         setDay(doc.data().dayOfWeek)
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
        
//       });
//       switch (DAY) {
//         case 'Sunday':       //chủ nhật
//             const Step_cn = Step;
//             km_cn = (Step_cn * 0.762).toFixed(2);
//             cal_cn = (Step_cn * 0.04).toFixed(2);  break;
//         case 'Monday':       //thứ 2
//             const Step_t2 = Step; 
//             km_t2 = (Step_t2 * 0.762).toFixed(2);
//             cal_t2 = (Step_t2 * 0.04).toFixed(2);  break;
//         case 'Tuesday':       //thứ 3
//             const Step_t3 = Step;
//             km_t3 = (Step_t3 * 0.762).toFixed(2);
//             cal_t3 = (Step_t3 * 0.04).toFixed(2);  break;
//         case 'Wednesday':     //thứ 4
//             const Step_t4 = STEP;
//             km_t4 = (Step_t4 * 0.762).toFixed(2);
//             cal_t4 = (Step_t4 * 0.04).toFixed(2);  break;
//         case 'Thursday':   //thứ 5
//             const Step_t5 = Step;
//             km_t5 = (Step_t5 * 0.762).toFixed(2);
//             cal_t5 = (Step_t5 * 0.04).toFixed(2);  break;
//         case 'Friday':   //thứ 6
//             const Step_t6 = Step;
//             km_t6 = (Step_t6 * 0.762).toFixed(2);
//             cal_t6 = (Step_t6 * 0.04).toFixed(2);  break;
//         case 'Saturday':   //thứ 7
//             const Step_t7 = Step;
//             km_t7 = (Step_t7 * 0.762).toFixed(2);
//             cal_t7 = (Step_t7 * 0.04).toFixed(2);
//       };
    
// console.log(STEP)
var [stept2, setStept2] = React.useState(0); var [kmt2, setKmt2] = React.useState(0); var [calt2, setCalt2] = React.useState(0);
var [stept3, setStept3] = React.useState(0); var [kmt3, setKmt3] = React.useState(0); var [calt3, setCalt3] = React.useState(0);
var [stept4, setStept4] = React.useState(0); var [kmt4, setKmt4] = React.useState(0); var [calt4, setCalt4] = React.useState(0);
var [stept5, setStept5] = React.useState(0); var [kmt5, setKmt5] = React.useState(0); var [calt5, setCalt5] = React.useState(0);
var [stept6, setStept6] = React.useState(0); var [kmt6, setKmt6] = React.useState(0); var [calt6, setCalt6] = React.useState(0);
var [stept7, setStept7] = React.useState(0); var [kmt7, setKmt7] = React.useState(0); var [calt7, setCalt7] = React.useState(0);
var [stepcn, setStepcn] = React.useState(0); var [kmcn, setKmcn] = React.useState(0); var [calcn, setCalcn] = React.useState(0);
function Check(step,day) {
  switch (day) {
    case 'Sunday':       //chủ nhật
        Step_cn = step;
        setStepcn(Step_cn)
        km_cn = (Step_cn * 0.762).toFixed(2); setKmcn(km_cn)
        cal_cn = (Step_cn * 0.04).toFixed(2); setCalcn(cal_cn);  break;
    case 'Monday':       //thứ 2
        Step_t2 = step; 
        setStept2(Step_t2)
        km_t2 = (Step_t2 * 0.762).toFixed(2); setKmt2(km_t2)
        cal_t2 = (Step_t2 * 0.04).toFixed(2); setCalt2(cal_t2);  break;
    case 'Tuesday':       //thứ 3
        Step_t3 = step;
        setStept3(Step_t3)
        km_t3 = (Step_t3 * 0.762).toFixed(2); setKmt3(km_t3)
        cal_t3 = (Step_t3 * 0.04).toFixed(2); setCalt3(cal_t3);  break;
    case 'Wednesday':     //thứ 4
        Step_t4 = step;
        setStept4(Step_t4)
        km_t4 = (Step_t4 * 0.762).toFixed(2); setKmt4(km_t4)
        cal_t4 = (Step_t4 * 0.04).toFixed(2); setCalt4(cal_t4);  break;
    case 'Thursday':   //thứ 5
        Step_t5 = step;
        setStept5(Step_t5)
        km_t5 = (Step_t5 * 0.762).toFixed(2); setKmt5(km_t5)
        cal_t5 = (Step_t5 * 0.04).toFixed(2); setCalt5(cal_t5);  break;
    case 'Friday':   //thứ 6
        Step_t6 = step;
        setStept6(Step_t6)
        km_t6 = (Step_t6 * 0.762).toFixed(2); setKmt6(km_t6)
        cal_t6 = (Step_t6 * 0.04).toFixed(2); setCalt6(cal_t6);  break;
    case 'Saturday':   //thứ 7
        Step_t7 = step;
        setStept7(Step_t7)
        km_t7 = (Step_t7 * 0.762).toFixed(2); setKmt7(km_t7)
        cal_t7 = (Step_t7 * 0.04).toFixed(2); setCalt7(cal_t7); 
  };
  console.log(step)
  console.log(typeof (step))
  console.log({stept2})
 /*  Number(Step_t2)
  Number(Step_t3)
  Number(Step_t4)
  Number(Step_t5)
  Number(Step_t6)
  Number(Step_t7)
  Number(Step_cn)
  console.log(typeof (Step_t4)) */
};
console.log({stept2})
  
  var [dataS, setData] = React.useState([]);
  const db = firebase.firestore();
  db.collection('User').doc(user.uid).collection('Step').orderBy('Step', 'desc').limit(7).onSnapshot((snap) => {
    const dataStep = []; 
    console.log ("Get data");
        snap.forEach(doc =>{
          Check(doc.data().Step, doc.data().dayOfWeek)
            // dataStep.push({ 
            //   STEP: doc.data().Step, 
            //   DAY: doc.data().dayOfWeek
            // })
            // console.log('success')
            
        });
        error => console.log('fail');
        // setData(dataStep);
        // console.log(dataStep)
        // dataStep.forEach(Object => {Check(step,day)})
        // console.log(Step_t4)     
        // dataStep.push({
        //   Monday: Step_t2,
        //   Tuesday: Step_t3,
        //   Wednesday: Step_t4,
        //   Thusday: Step_t5,
        //   Friday: Step_t6,
        //   Sartuday: Step_t7,
        //   Sunday: Step_cn
        // })
        // setData(dataStep)
      })

  


  const MyBarChart_step = () => {
    
    return (
      <>
      <ImageBackground style={styles.Background1}>
        <Text style={styles.header}>Steps ({/* {firstday} - {lastday} */}) </Text>
        <ScrollView horizontal={true}>
       
        <BarChart
          
          data={{
            labels : ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Sartuday','Sunday'],
            datasets: [
            {
              data : [stept2, stept3, stept4, stept5, stept6, stept7, stepcn]
            }
            ]
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
    return (
      <>
      <ImageBackground style={styles.Background1}>
        <Text style={styles.header}>Meter ({/* {firstday} - {lastday} */})</Text>
        <ScrollView horizontal={true}>
        <React.Fragment>
        <BarChart 
          data={{
            labels:
              ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Sartuday','Sunday'],
            datasets: [
              {
                data: [ kmt2, 
                        kmt3, 
                        kmt4, 
                        kmt5, 
                        kmt6, 
                        kmt7, 
                        kmcn
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
        </React.Fragment>
        </ScrollView>
      </ImageBackground>
      </>
    );
  };

  


  const MyBarChart_calo = () => {
    return (
      <>
      <ImageBackground style={styles.Background1}>
        <Text style={styles.header}>Calo ({/* {firstday} - {lastday} */})</Text>
        <ScrollView horizontal={true}>
        <React.Fragment>
        <BarChart
          data={{
            labels:
              ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Sartuday','Sunday'],
            datasets: [
              {
                data: [ calt2, 
                        calt3, 
                        calt4, 
                        calt5, 
                        calt6, 
                        calt7, 
                        calcn
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
        </React.Fragment>
        </ScrollView>
      </ImageBackground>
      </>
    );
  };

  return(
        <SafeAreaView style={{flex: 1}}>
        <ScrollView>
      <View style={styles.container}>
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

  
export default function AnalyticScreen({navigation}) {
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
        <HomeStack.Screen name="AnalyticSc" component={AnalyticStack} options={{
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