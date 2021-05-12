import React from 'react';
import {SafeAreaView,Text,View,StyleSheet,Dimensions} from 'react-native';
import {LineChart,BarChart} from 'react-native-chart-kit';

const MyBarChart = () => {
    return (
      <>
        <Text style={styles.header}>This week (22/3 - 28/3 )</Text>
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
          width={Dimensions.get('window').width - 12}
          height={220}
          chartConfig={{
            backgroundColor: '#a8c6fa',
            backgroundGradientFrom: '#a8c6fa',
            backgroundGradientTo: '#a8c6fa',
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
            style: {
              borderRadius: 10,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </>
    );
  };
  
const MyLineChart = () => {
    return (
      <>
        <Text style={styles.header}>Line Chart</Text>
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
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </>
    );
  };

export default function AnalyticScreen({navigation}) {
	return (
        <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View>
            <MyBarChart/>

            <MyLineChart/>
          </View>
        </View>
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
      padding: 10,
    },
    header: {
      textAlign: 'center',
      fontSize: 18,
      padding: 16,
      marginTop: 16,
    },
  });