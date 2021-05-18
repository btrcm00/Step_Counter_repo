import React, {useState} from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TextInput, Button, Header, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();
var width = Dimensions.get('window').width;
function ChangeStack({navigation}){
    return(
        <View style = {styles.container}>
			<View style={{flex:9}}>
				<View style={{flex:3,justifyContent: 'center',alignItems: 'center'}}>
					<View style={styles.container1}>
					<Image
						style = {styles.image}
						source={require('./StepCounterImg.png')}
					/>
					</View>
				</View>
				<View style={{flex:7,}}>
					<View style={{flex:4,justifyContent:'center'}}>
						<View style={{flex:1,justifyContent:'center'}} >
							<Text style = {styles.passText}>Old PassWord</Text>
							<TextInput
								style = {styles.input}
								placeholder = "  Old password"
								secureTextEntry={true}
								textAlign ='left'
							/>
						</View>
						<View style={{flex:1,justifyContent:'center'}}>
							<Text style = {styles.passText}>New PassWord</Text>
							<TextInput
								style = {styles.input}
								placeholder = "  New password"
								secureTextEntry={true}
							/>
						</View>
						<View style={{flex:1,justifyContent:'center'}}>
							<Text style = {styles.passText}>Confirm New PassWord</Text>
							<TextInput
								style = {styles.input}
								placeholder = "  Password"
								secureTextEntry={true}
							/>
						</View>
					</View>
					<View style={{flex:2}}>
						<View style={styles.buttonSection}>
							<TouchableOpacity 
								style={[styles.button,{color:'blue',marginLeft:20}]}
								onPress = {()=>{ navigation.navigate('Home')}}
							>
								<Text>Confirm</Text>
							</TouchableOpacity>
							<TouchableOpacity 
								style={[styles.button,{marginRight:20}]}
								onPress = {()=>{ navigation.goBack()}}
							>
								<Text>Cancel</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</View>
    );
};
export default function ChangepassScreen({navigation}) {
	return (
		<HomeStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: 'dodgerblue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="ChangepassSc" component={ChangeStack} options={{
            title:'Change Password',
            headerLeft: () => (
                <Icon.Button name="menu" size={25} backgroundColor="dodgerblue" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </HomeStack.Navigator>
	);
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'column',
	},
	container1: {
		alignItems:'center',
		justifyContent:'center',
		shadowColor: "#000",
		shadowOffset: {
		width: -5,
		height: 10,
		},
		shadowOpacity: 0.23,
		elevation: 4,
		height:108,
		borderRadius:20,
		width:108,
	},
	image: {
		resizeMode: 'center',
		height:'100%',
		width:'100%'
	},
	imageHeader: {
		height:'100%',
		width:width/6,
		resizeMode:'contain'
	},
	titleText:{
		flex:1,
		color:'black',
		fontSize:24,
		fontWeight:'bold',
	},
	passText:{
		fontSize: 20,
		marginLeft: width/6,
	},
	input:{
		height: 40,
		borderWidth: 1,
		marginLeft:width/6,
		marginRight:width/6,
	},
	buttonSection:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		flex:1
	},
	button: {
		alignItems: "center",
		justifyContent:'center',
		textAlignVertical:'center',
		width:120,
		height:40,
		borderRadius:10,
		backgroundColor:'dodgerblue',
	},
	sidebar:{
		alignItems:'center',
		textAlignVertical:'center',
		justifyContent:'center',
	},
	sibarSection:{
		flex:1,
		flexDirection:'row',
		backgroundColor:'gray',
		justifyContent:'center',
	}
});
