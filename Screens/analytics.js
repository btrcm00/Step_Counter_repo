import React from 'react';
import {SafeAreaView,Text,View,StyleSheet,Dimensions,ScrollView,ImageBackground} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();
import firebase from '../components/FirebaseConfig'
function AnalyticStack({navigation}){
  var today = new Date();
  var user = firebase.auth().currentUser;
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  // var time = today.toLocaleTimeString();
  today = dd + '-' + mm + '-' + yyyy;
  String(today);
  var [stept2, setStept2] = React.useState(0); 
  var [kmt2, setKmt2] = React.useState(0); 
  var [calt2, setCalt2] = React.useState(0);

  var [stept3, setStept3] = React.useState(0); 
  var [kmt3, setKmt3] = React.useState(0); 
  var [calt3, setCalt3] = React.useState(0);

  var [stept4, setStept4] = React.useState(0); 
  var [kmt4, setKmt4] = React.useState(0); 
  var [calt4, setCalt4] = React.useState(0);

  var [stept5, setStept5] = React.useState(0); 
  var [kmt5, setKmt5] = React.useState(0); 
  var [calt5, setCalt5] = React.useState(0);

  var [stept6, setStept6] = React.useState(0); 
  var [kmt6, setKmt6] = React.useState(0); 
  var [calt6, setCalt6] = React.useState(0);

  var [stept7, setStept7] = React.useState(0); 
  var [kmt7, setKmt7] = React.useState(0); 
  var [calt7, setCalt7] = React.useState(0);

  var [stepcn, setStepcn] = React.useState(0); 
  var [kmcn, setKmcn] = React.useState(0); 
  var [calcn, setCalcn] = React.useState(0);
  const Check=(step,day)=> {
    switch (day) {
      case 'Sunday' || 'x':       //chủ nhật
          setStepcn(step)
          var km_cn = (step * 0.762).toFixed(2); 
          setKmcn(km_cn)
          var cal_cn = (step * 0.04).toFixed(2); 
          setCalcn(cal_cn);  break;
      case 'Monday' || 'x':       //thứ 2 
          setStept2(step)
          var km_t2 = (step * 0.762).toFixed(2)
          setKmt2(km_t2)
          var cal_t2 = (step * 0.04).toFixed(2)
          setCalt2(cal_t2);  break;
      case 'Tuesday' || 'x':       //thứ 3
          setStept3(step)
          var km_t3 = (step * 0.762).toFixed(2); 
          setKmt3(km_t3)
          var cal_t3 = (step * 0.04).toFixed(2); 
          setCalt3(cal_t3);  break;
      case 'Wednesday' || 'x':     //thứ 4
          setStept4(step)
          var km_t4 = (step * 0.762).toFixed(2); 
          setKmt4(km_t4)
          var cal_t4 = (step * 0.04).toFixed(2); 
          setCalt4(cal_t4);  break;
      case 'Thursday' || 'x':   //thứ 5
          setStept5(step)
          var km_t5 = (step * 0.762).toFixed(2); 
          setKmt5(km_t5)
          var cal_t5 = (step * 0.04).toFixed(2); 
          setCalt5(cal_t5);  break;
      case 'Friday' || 'x':   //thứ 6
          setStept6(step)
          var km_t6 = (step * 0.762).toFixed(2); 
          setKmt6(km_t6)
          var cal_t6 = (step * 0.04).toFixed(2); 
          setCalt6(cal_t6);  break;
      case 'Saturday' || 'x':   //thứ 7
          setStept7(step)
          var km_t7 = (step * 0.762).toFixed(2); 
          setKmt7(km_t7)
          var cal_t7 = (step * 0.04).toFixed(2); 
          setCalt7(cal_t7); 
    };
  };
  
  var [dataS, setData] = React.useState([]);
  const db = firebase.firestore();
  db.collection('User').doc(user.uid).collection('Step').orderBy('Step', 'desc').limit(7).onSnapshot((snap) => {
    const dataStep = []; 
        snap.forEach(doc =>{
          Check(doc.data().Step, doc.data().dayOfWeek)
          
        });
  })
  const MyBarChart_step = () => {
    
    return (
      <>
      <ImageBackground style={styles.Background1}>
        <Text style={styles.header}>Steps in this week </Text>
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
          yAxisSuffix = ""
          width={ 500}  // Dimensions.get('window').width
          height={300}
          fromZero = {true}
          withInnerLines = {true}
          showValuesOnTopOfBars = {false}
          showBarTops = {true}
          const chartConfig = {{
            decimalPlaces: 0,
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "gray",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(70, 0, 146, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.7,
            useShadowColorFromDataset: false, // optional

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
        <Text style={styles.header}>Distance in this week </Text>
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
          yAxisSuffix = " m"
          width={ 500}  // Dimensions.get('window').width
          height={300}
          yAxisInterval = {1}
          fromZero = {true}
          withInnerLines = {true}
          showValuesOnTopOfBars = {false}
          showBarTops = {true}
          const chartConfig = {{
            decimalPlaces: 1,
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "gray",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(70, 0, 146, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.7,
            useShadowColorFromDataset: false // optional
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
        <Text style={styles.header}>Number of calories consumed in this week</Text>
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
          yAxisSuffix = " cal"
          width= {500}  // Dimensions.get('window').width
          height={300}
          fromZero = {true}
          withInnerLines = {true}
          showValuesOnTopOfBars = {false}
          showBarTops = {true}
          const chartConfig = {{
            decimalPlaces: 1,
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "gray",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(70, 0, 146, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.7,
            useShadowColorFromDataset: false, // optional
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
      color: `rgba(70, 0, 146, 1)`,
      fontWeight: 'bold',
      shadowColor: "black",
      shadowOffset: {
      width: -3,
      height: 3,
      },
      shadowOpacity: 0.2,
      elevation: 4,
    },
    Background1: {
      height: 350,
      backgroundColor: 'white',
    },

    Background2: {
      height: 350,
      backgroundColor: '#a8c6fa',

    }
  });