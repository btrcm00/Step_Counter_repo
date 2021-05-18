import React from 'react';
import {SafeAreaView,Text,View,StyleSheet,Dimensions,ScrollView,ImageBackground} from 'react-native';
import {LineChart,BarChart} from 'react-native-chart-kit';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();

function AnalyticStack_km({navigation}){
    return(
        <SafeAreaView style={{flex: 1}}>
        <ScrollView>
      <View style={styles.container}>
        <View style={styles.container2}>
        <TouchableOpacity 
        style={[styles.button,{marginRight:10}]}
        onPress={() => navigation.navigate('Analytic_steps')}
        >
          <Text>Steps</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        style={[styles.button,{marginRight:10}]}
        onPress={() => navigation.navigate('Analytic_km')}
        >
          <Text>Km</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.button,{marginRight:10}]}
        onPress={() => navigation.navigate('Analytic_calo')}
        >
          <Text>Calo</Text>
        </TouchableOpacity>
        </View>
        <View>
          <MyBarChart/>

          <MyLineChart/>
        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    );
};
const MyBarChart = () => {
    return (
      <>
      <ImageBackground style={styles.Background1}>
        <Text style={styles.header}>This week (22/3 - 28/3 )</Text>
        <ScrollView horizontal={true}>
        <BarChart
          data={{
            labels:
              ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Sartuday','Sunday'],
            datasets: [
              {
                data: [5000, 6000, 7000 , 8000, 7500, 7700, 5000],
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
  
const MyLineChart = () => {
    return (
      <>
        <ImageBackground style={styles.Background2}>
        <Text style={styles.header}>Km</Text>
        <ScrollView horizontal={true}>
        <LineChart
          data={{
            labels: 
              ['1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
            datasets: [
              {
                data: [5000,5500,5600,5700,5800,5900,6000,6100,6500,6600,6700,6800,6900,7000,7500,7700,7900,8000,5000,5700],
                strokeWidth: 2,
              },
            ],
          }}
          width={700 }  //Dimensions.get('window').width
          height={300}
          chartConfig={{
            backgroundColor: '#a8c6fa',
            backgroundGradientFrom: '#a8c6fa',
            backgroundGradientTo: '#a8c6fa',
            decimalPlaces: 2,
            color: (opacity=0) => `rgba(03, 30, 75, 0.7)`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        </ScrollView>
         </ImageBackground>
      </>
    );
  };

export default function AnalyticScreen_km({navigation}) {
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
        <HomeStack.Screen name="AnalyticSc" component={AnalyticStack_km} options={{
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