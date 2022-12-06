import { Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Products from './HomeRoute/Products';
import ProductInformation from './HomeRoute/ProductInformation';

import Cart from './CartRoute/Cart';
import Checkout from './CartRoute/Checkout';

import Profile from './ProfileRoute/Profile';

const HomeRouteStack = createNativeStackNavigator();

const HomeRouteStackScreens = () => (
    <HomeRouteStack.Navigator 
    screenOptions={{animation: 'slide_from_right',
    headerShown:false,
    }} initialRouteName="Products">
      <HomeRouteStack.Screen name="Products" component={Products} />
      <HomeRouteStack.Screen name="ProductInformation" component={ProductInformation} />
    </HomeRouteStack.Navigator>
);

const CartRouteStack = createNativeStackNavigator();

const CartRouteStackScreens = () => (
    <CartRouteStack.Navigator 
    screenOptions={{animation: 'slide_from_right',
    headerShown:false,
    }} initialRouteName="Cart">
      <CartRouteStack.Screen name="Cart" component={Cart} />
      <CartRouteStack.Screen name="Checkout" component={Checkout} />
    </CartRouteStack.Navigator>
);

const ProfileRouteStack = createNativeStackNavigator();

const ProfileRouteStackScreens = () => (
    <ProfileRouteStack.Navigator 
    screenOptions={{animation: 'slide_from_right',
    headerShown:false,
    }} initialRouteName="Products">
      <ProfileRouteStack.Screen name="Profile" component={Profile} />
    </ProfileRouteStack.Navigator>
);

const Tabs = createBottomTabNavigator();

const UserRouteTabs = () => (
  <Tabs.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size , padding}) => {
        let iconName;
        let iconColor;
        if (route.name==='HomeRoute'){
          iconName = focused ? 'home-variant' : 'home-variant-outline'
        }
        else if(route.name==='ProfileRoute'){
          iconName = focused ? 'account' : 'account-outline'
        }
        else{
          iconName = focused ? 'cart' : 'cart-outline'
        }
        iconColor = focused ? 'teal' : 'gray'
        return(
          <MaterialCommunityIcons name={iconName} size={32} color={iconColor}  />
        )
      },
      tabBarShowLabel:false, 
      tabBarStyle: styles.tabBar,
      tabBarHideOnKeyboard:true,
      headerShown:false
      
    })}>
      <Tabs.Screen name="HomeRoute" component={HomeRouteStackScreens}  />
      <Tabs.Screen name="CartRoute" component={CartRouteStackScreens}  />
      <Tabs.Screen name="ProfileRoute" component={ProfileRouteStackScreens} />
    </Tabs.Navigator>
);

const styles = StyleSheet.create({

  tabBar:{
    position: 'absolute',
    borderTopWidth:1
  }

})

export default UserRouteTabs;