import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { ChangepassScreen, HomeScreen, RegisterScreen, LoginScreen, LeaderboardScreen, StartScreen, MainTabScreen, ProfileScreen,AnalyticScreen} from './Screens'
import { createStackNavigator } from '@react-navigation/stack';
import {DrawerContent} from './Screens/DrawerContent'
const Drawer = createDrawerNavigator();
function App(){
  return(
    <NavigationContainer
    >
      <Drawer.Navigator initialRouteName='Home' drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name = "Home" component={MainTabScreen}/>
        <Drawer.Screen name = "Profile" component = {ProfileScreen}/>
        <Drawer.Screen name="Leaderboard" component={LeaderboardScreen}/>
        <Drawer.Screen name="Register" component={RegisterScreen} />
        <Drawer.Screen name="Login" component={LoginScreen}/>
        <Drawer.Screen name="Changepass" component={ChangepassScreen}/>
        <Drawer.Screen name="MainTab" component={MainTabScreen}/>
        <Drawer.Screen name="Analytic" component={AnalyticScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
