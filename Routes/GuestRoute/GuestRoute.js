import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStac}
import LoginPage from './LoginPage';

const GuestRouteStack = createNativeStackNavigator();

const GuestRouteStackScreens = () => (
    <GuestRouteStack.Navigator 
    screenOptions={{animation: 'slide_from_right',
    headerShown:false,
    }} initialRouteName="LoginPage">
      <GuestRouteStack.Screen name="LoginPage" component={LoginPage} />
    </GuestRouteStack.Navigator>
  );

export default GuestRouteStackScreens;