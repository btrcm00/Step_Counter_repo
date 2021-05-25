import  React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import 
  { 
    ChangepassScreen, 
    LeaderboardScreen, 
    MainTabScreen, 
    ProfileScreen,
    AnalyticScreen_calo,
    AnalyticScreen_steps,
    AnalyticScreen_km,
    LoginScreen,RegisterScreen
  } from './Screens';
import { View, ActivityIndicator } from 'react-native';
import {DrawerContent} from './Screens/DrawerContent';
import { AuthContext } from './components/context';
import RootStackScreen from './Screens/RootStackScreen';
import AsyncStorage from '@react-native-async-storage/async-storage'
const Drawer = createDrawerNavigator();
const App=()=>{
  //const [isLoading, setIsLoading] = React.useState(true);
  //const [userToken, setUserToken] = React.useState(null);
  return(
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Login" drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name = "Home" component={MainTabScreen}/>
            <Drawer.Screen name = "Profile" component = {ProfileScreen}/>
            <Drawer.Screen name="Leaderboard" component={LeaderboardScreen}/>
            <Drawer.Screen name="Changepass" component={ChangepassScreen}/>
            <Drawer.Screen name="MainTab" component={MainTabScreen}/>
            <Drawer.Screen name="Analytic_steps" component={AnalyticScreen_steps}/>
            <Drawer.Screen name="Analytic_km" component={AnalyticScreen_km}/>
            <Drawer.Screen name="Analytic_calo" component={AnalyticScreen_calo}/>
            <Drawer.Screen name="Login" component={LoginScreen}/>
            <Drawer.Screen name="Register" component={RegisterScreen}/>
          </Drawer.Navigator>
      </NavigationContainer>
  );
}
export default App;


