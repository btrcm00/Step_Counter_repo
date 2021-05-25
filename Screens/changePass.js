import React, {useState} from 'react';
import {  ImageBackground,Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firebase from '../components/FirebaseConfig'
const HomeStack = createStackNavigator();
var width = Dimensions.get('window').width;
function ChangeStack({navigation}){
	const [data, setData] = useState({
        email: '',
        currpassword: '',
		newpassword:'',
		confirmpassword:'',
    });
	const onHandleResetPass = () => {
		
	}
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
							
							<TextInput
								style = {styles.input}
								placeholder = "Old password"
								clearButtonMode = 'always'
								secureTextEntry={true}
								onChangeText={(val) => setData({...data,currpassword:val})}
								mode="outlined"
								label="Old Password"
								mode="outlined"
							/>
						</View>
						<View style={{flex:1,justifyContent:'center'}}>
							<TextInput
								style = {styles.input}
								placeholder = "New password"
								clearButtonMode = 'always'
								secureTextEntry={true}
								onChangeText={(val) => setData({...data,newpassword:val})}
								mode="outlined"
								label="New Password"
								mode="outlined"
							/>
						</View>
						<View style={{flex:1,justifyContent:'center'}}>
							<TextInput
								style = {styles.input}
								placeholder = "Confirm Newpassword"
								clearButtonMode = 'always'
								secureTextEntry={true}
								onChangeText={(val) => setData({...data,confirmpassword:val})}
								mode="outlined"
								label="Confirm Newpassword"
								mode="outlined"
							/>
						</View>
					</View>
					<View style={{flex:3}}>
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
	imageBackground: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
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
