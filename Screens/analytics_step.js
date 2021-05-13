import React from 'react';
import {SafeAreaView,Text,View,StyleSheet,Dimensions,ScrollView,ImageBackground} from 'react-native';
import {LineChart,BarChart} from 'react-native-chart-kit';

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
          
            color: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
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
        <Text style={styles.header}>Line Chart</Text>
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
            color: (opacity=0) => `rgba(1, 0, 0, ${opacity})`,
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

export default function AnalyticScreen({navigation}) {
	return (
        <SafeAreaView style={{flex: 1}}>
          <ScrollView>
        <View style={styles.container}>
          <View>
            <MyBarChart/>

            <MyLineChart/>
          </View>
        </View>
        </ScrollView>
        </SafeAreaView>
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