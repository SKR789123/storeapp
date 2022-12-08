import { View, Text, StyleSheet, SafeAreaView,ActivityIndicator, Alert, TextInput } from 'react-native'
import React,{useContext,useState} from 'react'

import AppButton from '../../../Components/AppButton'

import Database from '../../../Database/Database';
import { LoginContext } from '../../../Contexts/LoginContext'

const LoginPage = () => {

    const {setUser} = useContext(LoginContext)

    const [submitting, setSubmitting] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const Login = async() =>{
        
        if(username == ''){
          Alert.alert(`Username can't be empty`)
          return
        }
        if(password == ''){
          Alert.alert(`Password can't be empty`)
          return
        }
        setSubmitting(true)
        try {
            const submitCredentials = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  
                  username: username,
                  password: password,
                  // username: 'kminchelle',
                  // password: '0lelplR',
                })
              })

            const userData = await submitCredentials.json()
            if(userData.message){
              setSubmitting(false)
              Alert.alert(userData.message)
              return
            }
            const jsonValue = JSON.stringify(userData)
            const addUserData = await Database.setUserData('@user',jsonValue)
            setSubmitting(false)
            setUser(userData)
          } catch (e) {
            setSubmitting(false)
            Alert.alert(e.message)

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
          <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder={'username'}
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder={'password'}
        secureTextEntry={true}
      />
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
    input: {
      height: 40,
      marginHorizontal: 20,
      marginBottom:20,
      borderWidth: 1,
      borderColor:'gray',
      padding: 10,
    },

})

export default LoginPage

