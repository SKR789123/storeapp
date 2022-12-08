import { View, Text, Alert } from 'react-native'
import React,{useState,useEffect,useMemo} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GuestRoute from './Routes/GuestRoute';
import UserRoute from './Routes/UserRoute';

import {LoginContext} from './Contexts/LoginContext'
import Database from './Database/Database';

const RootStack = createNativeStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator screenOptions={{animation: 'fade',headerShown:false}}>
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={UserRoute}
        
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={GuestRoute}
        // options={{
        //   animation: 'none',
        //   headerShown:false,
        //   transitionSpec: {
        //     open: TransitionSpecs.TransitionIOSSpec,
        //     close: TransitionSpecs.TransitionIOSSpec,
        //   },
        // }}
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
      Alert.alert(e.message)
    }


  }

  useEffect(()=>{

    getAuthState()


  },[])

  if (initializing) return null;

  return (
    <NavigationContainer>
      <LoginContext.Provider value={{setUser,user}}>
      <RootStackScreen userToken={user} />
      </LoginContext.Provider>
    </NavigationContainer>
  )
}