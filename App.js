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
    AnalyticScreen,
    AnalyticScreen_km,
    LoginScreen,RegisterScreen,
    UpdateProfileScreen,
    HistoryScreen
  } from './Screens';
import {DrawerContent} from './Screens/DrawerContent';
const Drawer = createDrawerNavigator();
const App=()=>{
  //const [isLoading, setIsLoading] = React.useState(true);
  //const [userToken, setUserToken] = React.useState(null);
  return(
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Login" screenOptions={MainTabScreen} drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name = "Home" component={MainTabScreen}/>
            <Drawer.Screen name = "Profile" component = {ProfileScreen}/>
            <Drawer.Screen name="Leaderboard" component={LeaderboardScreen}/>
            <Drawer.Screen name="Changepass" component={ChangepassScreen}/>
            <Drawer.Screen name="MainTab" component={MainTabScreen}/>
            <Drawer.Screen name="Analytic_steps" component={AnalyticScreen}/>
            <Drawer.Screen name="Analytic_km" component={AnalyticScreen_km}/>
            <Drawer.Screen name="Analytic_calo" component={AnalyticScreen_calo}/>
            <Drawer.Screen name="Login" component={LoginScreen}/>
            <Drawer.Screen name="Register" component={RegisterScreen}/>
            <Drawer.Screen name="Updateprofile" component={UpdateProfileScreen}/>
            <Drawer.Screen name = "History" component={HistoryScreen}/>
          </Drawer.Navigator>
      </NavigationContainer>
  );
}
export default App;