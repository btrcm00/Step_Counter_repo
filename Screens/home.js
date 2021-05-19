
import React, { Component, useState, useRef, useEffect } from 'react';
import {Text,StyleSheet,View,ScrollView,Dimensions, Animated} from 'react-native';
import Slider from '@react-native-community/slider'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();
var { height } = Dimensions.get('window');

var box_count = 3;

var height = Dimensions.get('window').height;
function useInterval(callback, delay) {
  const savedCallback = useRef();
  
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
function HomeStackScreen({props}){
  const [progress, setProgress] = useState(0);
  useInterval(() => {
    if(progress < 100) {
      setProgress(progress + 5);
    }
  }, 1000);
  const step =600;
  const target = 1200;
  const width = ((step/target)*100).toString(10) + '%';
  return(
    
    <View style={{flex:1}}>
        <View style={{ flex: 1.2,alignItems:'center',borderBottomColor: 'gray',borderBottomWidth: 1}}>
          <Text h1 style={styles.bigBlack}>Today</Text>
          <View style={styles.todayBox}>
            <View>
              <Text style={styles.todayTitleText}>Steps</Text>
            </View>
            <View>
              <Text style={styles.todayBodyText}>{step} steps</Text>
            </View>
          </View>
        </View>

        <View style={{flex: 1,borderBottomColor: 'gray',borderBottomWidth: 1}}>
            <View style = {{flex:1,alignItems:'center'}}>
              <Text h2 style={styles.bigBlack}>Process</Text>
              <View style={styles.progressBar}>
                <Animated.View style={[styles.absoluteFill,{width}]}/>
              </View>
              <Text>{width}</Text>
            </View>
          

          {/* <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="#ccc"
            maximumValue={100}
            minimumTrackTintColor="#222"
            minimumValue={0}
            onSlidingComplete={() =>
              console.log("onSlidingComplete()")
            }
            onSlidingStart={() =>
              console.log("onSlidingStart()")
            }
            onValueChange={value =>
              console.log("onValueChange()", value)
            }
            orientation="horizontal"
            step={1}
            style={{ width: "80%", height: 200 }}
            thumbStyle={{ height: 20, width: 20 }}
            thumbProps={{
          children: (
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#f50"
            />
          )
        }}
        thumbTintColor="#0c0"
        thumbTouchSize={{ width: 40, height: 40 }}
        trackStyle={{ height: 10, borderRadius: 20 }}
        value={50}
      /> */}

        </View>

        <View style={{flex:2, alignItems:'center',}}>
          <Text h3 style={styles.bigBlack}>More</Text>
          <View style={styles.todayBox}>
            <View>
              <Text style={styles.todayTitleText}>Walking + Running Distance</Text>
            </View>
            <View>
              <Text style={styles.todayBodyText}>5.5 km</Text>
            </View>
          </View>
          <Text> </Text>
          <View style={styles.todayBox}>
            <View>
              <Text style={styles.todayTitleText}>Active Energy</Text>
            </View>
            <View>
              <Text style={styles.todayBodyText}>4000 kcal</Text>
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
        backgroundColor: '#ff6600',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="HomeSc" component={HomeStackScreen} options={{
        title:'Step Counter',
        headerLeft: () => (
            <Icon.Button name="menu" size={25} backgroundColor="#ff6600" onPress={() => navigation.openDrawer()}></Icon.Button>
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
    backgroundColor: '#D7D7D7',
    alignItems:'center',
    justifyContent:'center',
    width: '95%',
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10
  },
  todayTitleText: {
    fontWeight: 'bold',
    color: '#ff6600',
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
    backgroundColor: '#D7D7D7',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 15
  },
  absoluteFill:
  {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#ff6600",
    borderRadius:15
  }
}
)