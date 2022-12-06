import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React,{useContext} from 'react'

import AppButton from '../../../Components/AppButton'
import AppTextInput from '../../../Components/AppTextInput'


import { LoginContext } from '../../../Contexts/LoginContext'

const LoginPage = () => {

    const {setUser} = useContext(LoginContext)

    const Login = () =>{
        
        setUser('saa')
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

