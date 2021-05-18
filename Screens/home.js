import React, { Component } from 'react';
import {Text,StyleSheet,View,Button,Dimensions, Slider} from 'react-native';
import {Divider} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();
var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

function HomeStackScreen({navigation}){
  return(
    <View style={{ flex: 1,backgroundColor:'#b0e0e6'}}>
      <View style={{ flex: 0.3, backgroundColor: '#f2f2f2'}}>
        <Text h1 style={styles.bigBlack}>Today</Text>
        <View style={styles.todayBox}>
          <View>
            <Text style={styles.todayTitleText}>Steps</Text>
          </View>
          <View>
            <Text style={styles.todayBodyText}>600 steps</Text>
          </View>
        </View>
      </View>

      <View style={{flex: 0.3, backgroundColor: '#f2f2f2'}}>
        <Text h2 style={styles.bigBlack}>Highlights</Text>

        <Slider
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
    />

      </View>

      <View style={{flex:0.4, backgroundColor: '#f2f2f2'}}>
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


          {/* <Button
            title="Go to ChangePassword!"
            onPress={() => navigation.navigate('Changepass')}
          />
          <Button
            title="Go to Register!"
            onPress={() => navigation.navigate('Register')}
          />
          <Button
            title="Go to Login!"
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            title="Go to LeaderBoard!"
            onPress={() => navigation.navigate('Leaderboard')}
          />
          <Button
            title="Go to Analytic!"
            onPress={() => navigation.navigate('Analytic')}
          /> */}
    </View>
      
  );
};
export default function HomeScreen({navigation}){
    return (
      <HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#6699FF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="HomeSc" component={HomeStackScreen} options={{
        title:'Step Counter',
        headerLeft: () => (
            <Icon.Button name="menu" size={25} backgroundColor="#6699FF" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
    </HomeStack.Navigator>
      );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
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
    backgroundColor: '#80bfff',
    width: 350,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
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
}
)