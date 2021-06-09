import React from 'react';
import {SafeAreaView,Text,View,StyleSheet,Dimensions,ScrollView,ImageBackground, Button} from 'react-native';
import {LineChart,BarChart} from 'react-native-chart-kit';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();
import firebase from '../components/FirebaseConfig'
//import { get } from 'core-js/fn/reflect';

function AnalyticStack({navigation}){
  const Step_cn = '0';  const km_cn = '0';  const cal_cn = '0'; 
  const Step_t2 = '0';  const km_t2 = '0';  const cal_t2 = '0'; 
  const Step_t3 = '0';  const km_t3 = '0';  const cal_t3 = '0'; 
  const Step_t4 = '0';  const km_t4 = '0';  const cal_t4 = '0';   
  const Step_t5 = '0';  const km_t5 = '0';  const cal_t5 = '0'; 
  const Step_t6 = '0';  const km_t6 = '0';  const cal_t6 = '0'; 
  const Step_t7 = '0';  const km_t7 = '0';  const cal_t7 = '0'; 

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

  var [dataStep, setData] = React.useState([]);
 
  const db = firebase.firestore();
  const docRef = db.collection('User').doc(user.uid).collection('Step');
  docRef.orderBy('Step', 'dayOfWeek', 'desc').limit(7).get().then((snapshot) =>{
    const dataStep = [];
    console.log ("Get data");
    snapshot.forEach((doc) =>{
         // đẩy vào mảng 
         // lấy STEP từ mảng  
        dataStep.push({STEP: doc.data().Step, DAY: doc.data().dayOfWeek})
        
    });
    setData(dataStep);
  });
  // render() {
    const CheckStep = dataStep.forEach(function (Checkday) {
      switch (dayOfWeek) {
      case 'Sunday':       //chủ nhật
          const Step_cn = Step;
          km_cn = (Step_cn * 0.762).toFixed(2);
          cal_cn = (Step_cn * 0.04).toFixed(2);  break;
      case 'Monday':       //thứ 2
          const Step_t2 = Step; 
          km_t2 = (Step_t2 * 0.762).toFixed(2);
          cal_t2 = (Step_t2 * 0.04).toFixed(2);  break;
      case 'Tuesday':       //thứ 3
          const Step_t3 = Step;
          km_t3 = (Step_t3 * 0.762).toFixed(2);
          cal_t3 = (Step_t3 * 0.04).toFixed(2);  break;
      case 'Wednesday':     //thứ 4
          const Step_t4 = Step;
          km_t4 = (Step_t4 * 0.762).toFixed(2);
          cal_t4 = (Step_t4 * 0.04).toFixed(2);  break;
      case 'Thursday':   //thứ 5
          const Step_t5 = Step;
          km_t5 = (Step_t5 * 0.762).toFixed(2);
          cal_t5 = (Step_t5 * 0.04).toFixed(2);  break;
      case 'Friday':   //thứ 6
          const Step_t6 = Step;
          km_t6 = (Step_t6 * 0.762).toFixed(2);
          cal_t6 = (Step_t6 * 0.04).toFixed(2);  break;
      case 'Saturday':   //thứ 7
          const Step_t7 = Step;
          km_t7 = (Step_t7 * 0.762).toFixed(2);
          cal_t7 = (Step_t7 * 0.04).toFixed(2);
    };
  });
  // }
  
 

  //const snapshot = local_step.where(doc, '==', firstday).get();
//String(Step_t2);
//String(Step_t3);
//String(Step_t4);
//String(Step_t5);
//String(Step_t6);
//String(Step_t7);
//String(Step_cn);
 
  const MyBarChart_step = () => {
    return (
      <>
      <ImageBackground style={styles.Background1}>
        <Text style={styles.header}>Steps ({/* {firstday} - {lastday} */}) </Text>
        <ScrollView horizontal={true}>
        <React.Fragment>
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
        </React.Fragment>
        </ScrollView>
      </ImageBackground>
      </>
    );
  };
  
 

  const MyBarChart_km = () => {
    return (
      <>
      <ImageBackground style={styles.Background1}>
        <Text style={styles.header}>Km ({/* {firstday} - {lastday} */})</Text>
        <ScrollView horizontal={true}>
        <React.Fragment>
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