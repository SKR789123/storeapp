import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage';

const UserRouteStack = createNativeStackNavigator();

const UserRouteStackScreens = () => (
    <UserRouteStack.Navigator 
    screenOptions={{animation: 'slide_from_right',
    headerShown:false,
    }} initialRouteName="HomePage">
      <UserRouteStack.Screen name="HomePage" component={HomePage} />
    </UserRouteStack.Navigator>
  );

export default UserRouteStackScreens;