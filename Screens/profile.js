import React from 'react';
import {StyleSheet,View,Button,ScrollView,Image,SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Avatar,
    Title,
    Text,
  } from 'react-native-paper';
const HomeStack = createStackNavigator();
import firebase from '../components/FirebaseConfig'
function ProfileStack({navigation}){
    var user = firebase.auth().currentUser;
    var [target, setTarget] = React.useState('0');
    var [email, setEmail] = React.useState(user.email);
    var [name, setName] = React.useState(user.displayName);
    const db = firebase.firestore();
    db.collection('User').doc(user.uid).onSnapshot((doc)=>{
        if (doc.exists) {
            setTarget(doc.data().target);
            setEmail(doc.data().email.toLowerCase());
            setName(doc.data().name);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
      })
    return(
        <View style = {{flex:1, alignItems:'center',backgroundColor:'#FAF0E6'}}>
            <View style={[styles.tag,{flex:1.3,flexDirection:'row',alignItems:'center'}]}>
                <Avatar.Image 
                    source={{ 
                        uri: 'https://api.adorable.io/avatars/80/abott@adorable.png', 
                    }}
                    size={70}
                    style={{marginLeft:10}}
                />
                <Title style={styles.title}>{name}</Title>
            </View>
            <View style={[styles.tag,{flex:4}]}>
                <View style = {{flex:3, marginLeft:30,marginTop:40}}>
                    <View style={styles.row}>
                        <Icon name="phone" color="#777777" size={30} />
                        <Text style={{color:"#777777", marginLeft: 20, fontSize: 20}}>{user.phoneNumber?user.phoneNumber:"Add phone number?"}</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color="#777777" size={30}/>
                        <Text style={{color:"#777777", marginLeft: 20, fontSize: 20}}>{email}</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="trophy-outline" color="#777777" size={30}/>
                        <Text style={{color:"#777777",marginLeft: 20, fontSize: 20}}>Your Goal:  {target}</Text>
                    </View>
                </View>
                <View style = {{flex:1, marginLeft:30,marginTop:40, flexDirection:'row'}}>
                    <Button
                        title="Edit Profile"
                        onPress={async() => navigation.navigate('Updateprofile')}
                    />
                    <Button
                        title = "Change Password"
                        color='red'
                        mode="outlined"
                        onPress={() => navigation.navigate('Changepass')}
                    />
                </View>
            </View>
        </View>
    );
};

export default function ProfileScreen({navigation,route}) {
	return (
		
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#CC9999',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="ProfileSc" component={ProfileStack} options={{
            title:'Profile',
            headerLeft: () => (
                <Icon.Button name="account-circle" size={25} backgroundColor="#CC9999" onPress={() => navigation.openDrawer()}></Icon.Button>
            ),
            
            }} />
        </HomeStack.Navigator>
	);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tag:{
        margin:8,
        backgroundColor:'white',
        width: '95%',
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: -5,
            height: 6,
        },
        shadowOpacity: 0.23,
        elevation: 4,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
        alignItems: 'center',
    },
    userInfoSpec: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft:10
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 20,
      flex:1,
      alignItems:'center'
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
  });