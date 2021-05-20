
import React from 'react';
import {Text,StyleSheet,View,ScrollView,Dimensions, Animated} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();
var height = Dimensions.get('window').height;
function HomeStackScreen({navigation,route}){
  const step =route.params?.steps;
  const target = 1200;
  const kcal = step * 0.04;
  const m = step * 0.762;
  const width = (step<=target)?(((step/target)*100).toFixed(2).toString(10) + '%'):'100%';
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
                <Icon name="run-circle" color='black' size={height/13} />
              </View>
              <Text>{width}</Text>
            </View>
        </View>
        <View style={{flex:2, alignItems:'center',}}>
          <Text h3 style={styles.bigBlack}>More</Text>
          <View style={styles.todayBox}>
            <View>
              <Text style={styles.todayTitleText}>Walking + Running Distance</Text>
            </View>
            <View>
              <Text style={styles.todayBodyText}>{m} m</Text>
            </View>
          </View>
          <Text> </Text>
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
    borderRadius: 15,
    alignItems:'center'
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