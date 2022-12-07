import { View, Text, Alert } from 'react-native'
import React,{useState,useEffect,useMemo} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GuestRoute from './Routes/GuestRoute';
import UserRoute from './Routes/UserRoute';

import {LoginContext} from './Contexts/LoginContext'
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const authState = async() =>{

    try {
      const user = await AsyncStorage.getItem('@user')
      if(user){
        const userObject = JSON.parse(user)
        setUser(userObject)
        if (initializing) setInitializing(false);
        return
      }
      if (initializing) setInitializing(false);

    } catch(e) {
      Alert.alert(e.message)
    }


  }

  useEffect(()=>{

    authState()

  //  setTimeout(()=>{
  //    if (initializing) setInitializing(false);
  //    authState()
  //  },2000)

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