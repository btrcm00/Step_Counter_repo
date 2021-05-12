/* import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ChangepassScreen, HomeScreen, RegisterScreen, LoginScreen, DashboardScreen, LeaderboardScreen, StartScreen} from './Screens'
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = "StartScreen"
        headerMode
      >
        <Stack.Screen name = "StartScreen" component = {StartScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}  />
        <Stack.Screen name="HomeScreen" component={HomeScreen}  />
        <Stack.Screen name="ChangepassScreen" component={ChangepassScreen}  />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}  />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen}  />
        <Stack.Screen name="LeaderboardScreen" component={LeaderboardScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { ChangepassScreen, HomeScreen, RegisterScreen, LoginScreen, DashboardScreen, LeaderboardScreen, StartScreen, MainTabScreen, ProfileScreen} from './Screens'
import { createStackNavigator } from '@react-navigation/stack';
import {DrawerContent} from './Screens/DrawerContent'
const Drawer = createDrawerNavigator();
function App(){
  return(
    <NavigationContainer
    >
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name = "Home" component={MainTabScreen}/>
        <Drawer.Screen name = "Profile" component = {ProfileScreen}/>
        <Drawer.Screen name="DashBoard" component={DashboardScreen} />
        <Drawer.Screen name="LeaderBoard" component={LeaderboardScreen}/>
        <Drawer.Screen name="Register" component={RegisterScreen} />
        <Drawer.Screen name="Login" component={LoginScreen}/>
        <Drawer.Screen name="Changepass" component={ChangepassScreen}/>
        <Drawer.Screen name="MainTab" component={MainTabScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
