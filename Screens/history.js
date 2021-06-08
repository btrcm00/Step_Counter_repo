import React from 'react';
import {StyleSheet,View,ScrollView,Text, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firebase from '../components/FirebaseConfig'
const HomeStack = createStackNavigator();
function HistoryStack({navigation}){
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;
    const state = {
        data: [
            {'Step': 'Ben', 'id': 1},
            {'name': 'Susan', 'id': 2},
            {'name': 'Robert', 'id': 3},
            {'name': 'Mary', 'id': 4},
            {'name': 'Daniel', 'id': 5},
            {'name': 'Laura', 'id': 6},
            {'name': 'John', 'id': 7},
            {'name': 'Debra', 'id': 8},
            {'name': 'Aron', 'id': 9},
            {'name': 'Ann', 'id': 10},
            {'name': 'Steve', 'id': 11},
            {'name': 'Olivia', 'id': 12}
            //...
        ] //can also be an object of objects!: data: {a:{}, b:{}}
    }
    return(
        <View>
            <ScrollView>
                {
                    state.data.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <Text>{item.name}</Text>
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
