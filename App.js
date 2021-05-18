import  React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { ChangepassScreen, HomeScreen, LeaderboardScreen, MainTabScreen, ProfileScreen,AnalyticScreen_calo,AnalyticScreen_steps,AnalyticScreen_km} from './Screens';
import { View, ActivityIndicator } from 'react-native';
import {DrawerContent} from './Screens/DrawerContent';
import { AuthContext } from './components/context';
import RootStackScreen from './Screens/RootStackScreen';

const Drawer = createDrawerNavigator();
const App=()=>{
  //const [isLoading, setIsLoading] = React.useState(true);
  //const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      /* setUserToken('congminh');
      setIsLoading(false); */
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      /* setUserToken(null);
      setIsLoading(false); */
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      //setUserToken('congminh');
      //setIsLoading(false);
    }
  }));
  useEffect(() => {
    setTimeout(async() => {
      //setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if(loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  return(
    <AuthContext.Provider value = {authContext}>
      <NavigationContainer>
        { loginState.userToken !== null ? (
          <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name = "Home" component={MainTabScreen}/>
            <Drawer.Screen name = "Profile" component = {ProfileScreen}/>
            <Drawer.Screen name="Leaderboard" component={LeaderboardScreen}/>
            <Drawer.Screen name="Changepass" component={ChangepassScreen}/>
            <Drawer.Screen name="MainTab" component={MainTabScreen}/>
            <Drawer.Screen name="Analytic_steps" component={AnalyticScreen_steps}/>
            <Drawer.Screen name="Analytic_km" component={AnalyticScreen_km}/>
            <Drawer.Screen name="Analytic_calo" component={AnalyticScreen_calo}/>
          </Drawer.Navigator>
        ):<RootStackScreen/>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
export default App;


