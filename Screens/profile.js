import React from 'react';
import {StyleSheet,View,Button,ScrollView,Image,SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import Icon from 'react-native-vector-icons'
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
  } from 'react-native-paper';
const HomeStack = createStackNavigator();
function ProfileStack({navigation}){
    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar.Image 
                        source={{ 
                            uri: 'https://api.adorable.io/avatars/80/abott@adorable.png', 
                        }}
                            size={80}
                    />
                </View>
                <View>
                    <Title style={styles.title}>TT P</Title>
                    <Title style={styles.caption}>@th.P</Title>
                </View>
            </View>

            <View style={styles.userInfoSpec}>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" color="#777777" size={30}/>
                    <Text style={{color:"#777777", marginLeft: 20, fontSize: 20}}>Ho Chi Minh City</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" color="#777777" size={30} />
                    <Text style={{color:"#777777", marginLeft: 20, fontSize: 20}}>0123456789</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color="#777777" size={30}/>
                    <Text style={{color:"#777777", marginLeft: 20, fontSize: 20}}>hello_@email.com</Text>
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <Icon name="trophy-outline" size={25}/>
                <Text style={{marginLeft: 10, fontSize: 20}}>Your Goal</Text>
            </View>

            <View style={styles.menuWrapper}>
                <Button
                    title="Edit Profile"
                    onPress={() => navigation.navigate('Profile')}
                />
                <Button
                    title = "Change Password"
                    color='red'
                    mode="outlined"
                    onPress={() => navigation.navigate('Changepass')}
                />

            </View>
        </SafeAreaView>
            
        
        

        // <View style={styles.container}>
        // <Button
        //     title = "Change Password"
        //     mode="outlined"
        //     onPress={() => navigation.navigate('Changepass')}
        // />
        // </View>
    );
};

export default function ProfileScreen({navigation}) {
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
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 20,
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
    menuWrapper: {
      marginTop: 10,
      flexDirection: 'row',
      marginLeft: 30,
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