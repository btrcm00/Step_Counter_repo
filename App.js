import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ChangepassScreen, HomeScreen, RegisterScreen, LoginScreen, DashboardScreen, LeaderboardScreen, StartScreen, AnalyticScreen} from './Screens'
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = "StartScreen"
      >
        <Stack.Screen name = "StartScreen" component = {StartScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}  />
        <Stack.Screen name="HomeScreen" component={HomeScreen}  />
        <Stack.Screen name="ChangepassScreen" component={ChangepassScreen}  />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}  />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen}  />
        <Stack.Screen name="LeaderboardScreen" component={LeaderboardScreen}  />
        <Stack.Screen name="AnalyticScreen" component={AnalyticScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;