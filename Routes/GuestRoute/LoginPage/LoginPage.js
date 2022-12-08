import { View, Text, StyleSheet, SafeAreaView,ActivityIndicator, Alert } from 'react-native'
import React,{useContext,useState} from 'react'

import AppButton from '../../../Components/AppButton'
import AppTextInput from '../../../Components/AppTextInput'

import Database from '../../../Database/Database';
import { LoginContext } from '../../../Contexts/LoginContext'

const LoginPage = () => {

    const {setUser} = useContext(LoginContext)

    const [submitting, setSubmitting] = useState(false)

    const Login = async() =>{
        setSubmitting(true)
        try {
            const submitCredentials = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  
                  username: 'kminchelle',
                  password: '0lelplR',
                  // expiresInMins: 60, // optional
                })
              })

            const userData = await submitCredentials.json()
            const jsonValue = JSON.stringify(userData)
            const addUserData = await Database.setUserData('@user',jsonValue)
            setSubmitting(false)
            setUser(userData)
          } catch (e) {
            setSubmitting(false)
            Alert.alert(e.message)
            // saving error
          }
        
    }

  return (
    <View style={styles.container}>

        <SafeAreaView>

        </SafeAreaView>

      <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>Practical Test</Text>
      </View>

      <View style={styles.inputWrapper}>
          <AppTextInput type='username' secured={false} />
          <AppTextInput type='password' secured={true} />
      </View>




      <AppButton title='Login' action={Login} />
      {submitting && <ActivityIndicator size="large" color="#645cfc" />}
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center'
    },
    titleWrapper:{
        alignItems:'center'
    },
    titleText:{
        fontSize:25
    },
    inputWrapper:{
        marginTop:'20%'
    },

})

export default LoginPage

