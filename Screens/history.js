import React from 'react';
import {StyleSheet,View,ScrollView,Text, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firebase from '../components/FirebaseConfig'
const HomeStack = createStackNavigator();
function HistoryStack(){

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var time = today.toLocaleTimeString();

    today = dd + '-' + mm + '-' + yyyy;
    String(today);

    const db = firebase.firestore();
    const user = firebase.auth().currentUser;
    var [data1, setData] = React.useState([]);
    // db.collection("User").doc(user.uid).collection("Step").doc(today).collection('Log').onSnapshot((snap) =>{
    //     const datas = []
    //     snap.forEach((doc) =>{
    //         datas.push({step: doc.data().Step, time: doc.data().Time})
    //     })
    //     setData(datas);
    //  })
    return(
        <View>
            <ScrollView>
                {
                    data1.map((item, index) => (
                     <View key = {item.time} style = {styles.item}>
                        <Text>{item.step}</Text>
                        <Text>{item.time}</Text>
                     </View>
                  ))
               }
            </ScrollView>
        </View>
    );
};

export default function HistoryScreen({navigation}) {
	return (
		<HomeStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#CDC9A5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Historysc" component={HistoryStack} options={{
            title:'History',
            headerLeft: () => (
                <Icon.Button name="history" size={25} backgroundColor="#CDC9A5" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
        </HomeStack.Navigator>
	);
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    imageBackground: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center"
	  },
    item: {
    alignItems:'center',
    backgroundColor:'white',
    justifyContent:'space-between',
    margin:5,
    borderRadius: 10,
    shadowColor: "black",
    padding:40,
    shadowOffset: {
    width: -5,
    height: 6,
    },
    shadowOpacity: 0.23,
    elevation: 4,
    },
})
