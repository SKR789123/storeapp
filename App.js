import { Alert } from 'react-native'
import React,{useState,useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GuestRoute from './Routes/GuestRoute';
import UserRoute from './Routes/UserRoute';

import {LoginContext} from './Contexts/LoginContext'
import Database from './Database/Database';
import AppLoader from './Components/AppLoader';

const RootStack = createNativeStackNavigator();
const RootStackScreen = ({ user }) => (
  <RootStack.Navigator screenOptions={{animation: 'fade',headerShown:false}}>
    {user ? (
      <RootStack.Screen
        name="App"
        component={UserRoute}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={GuestRoute}
      />
    )}
  </RootStack.Navigator>
);

export default function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(false);

  const getAuthState = async() =>{

    try {
      const user = await Database.getUserData('@user')
      if(user){
        setUser(user)
        if (initializing) setInitializing(false);
        return
      }
      if (initializing) setInitializing(false);

    } catch(e) {
      if (initializing) setInitializing(false);
      Alert.alert(e.message)
    }


  }

  useEffect(()=>{

    getAuthState()


  },[])

  if (initializing) return <AppLoader />;

  return (
    <NavigationContainer>
      <LoginContext.Provider value={{setUser,user}}>
      <RootStackScreen user={user} />
      </LoginContext.Provider>
    </NavigationContainer>
  )
}
