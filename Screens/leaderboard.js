import React from 'react';
import {StyleSheet,View,Image,Text, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Leaderboard from 'react-native-leaderboard';
import firebase from '../components/FirebaseConfig';

const HomeStack = createStackNavigator();
function LeaderboardStack({navigation}){
    const user = firebase.auth().currentUser;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var time = today.toLocaleTimeString();

    today = dd + '-' + mm + '-' + yyyy;
    String(today);
    const db = firebase.firestore();
    // var [Step, setStep] = React.useState('');
    // var [Name, setName] = React.useState('');
    // db.collection('User').doc(user.uid).collection('Step').doc('07-06-2021').onSnapshot((doc)=>{
    //     if (doc.exists) {
    //         //setStep(doc.data().Step);
    //         setName(doc.data().name);
    //         console.log(Name);
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // })

    // const state = {
    //     data: [
    //         {userName: 'Joe', highScore: 52},
    //         {userName: 'Jenny', highScore: 120},
    //         {userName: 'Thong', highScore: 33},
    //         {userName: 'TH', highScore: 333},
    //         //...
    //     ] //can also be an object of objects!: data: {a:{}, b:{}}
    // }
    var [data1, setData] = React.useState([]);
    const unsubscribe = firebase.firestore().collection("User").get().then((snap) =>{
        const datas = [];
        snap.forEach((doc) =>{
            datas.push({userName: doc.data().name, highScore: doc.data().stepsOfday})
        })
        setData(datas);
    //or you can use useState like const [data, setData] = useState([]); then setData(datas)
     })

    console.log(data1);
    return(
        <Leaderboard 
        data={data1} 
        sortBy='highScore' 
        labelBy='userName'/>
    );
};

export default function LeaderboardScreen({navigation}) {
	return (
		<HomeStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#CC3366',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="LeaderBoardSc" component={LeaderboardStack} options={{
            title:'LeaderBoard',
            headerLeft: () => (
                <Icon.Button name="leaderboard" size={25} backgroundColor="#CC3366" onPress={() => navigation.openDrawer()}></Icon.Button>
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
})
