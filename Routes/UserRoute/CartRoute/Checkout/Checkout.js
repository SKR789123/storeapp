import { View, Text, StyleSheet,Alert } from 'react-native'
import React from 'react'

import AppHeader from '../../../../Components/AppHeader'
import AppRadioIcon from '../../../../Components/AppRadioIcon'
import AppButton from '../../../../Components/AppButton'

import AsyncStorage from '@react-native-async-storage/async-storage';

const Checkout = ({navigation,route}) => {
  const {cartTotal} = route.params
  
  const pay = async() =>{

    try {
      const deleteCart = await AsyncStorage.removeItem('@cartdata')
      navigation.pop()
      navigation.navigate('HomeRoute')
      Alert.alert('Payment Successfull!')

    } catch(e) {
      Alert.alert(err.message)
    }


    

  }

  return (
    <View style={styles.container}>
      <AppHeader title='Checkout' navigation={navigation} />

      <View style={styles.totalWrapper}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalValue}>{`$ ${cartTotal}.00`}</Text>
      </View>

      <View style={styles.paymentMethodWrapper}>
        <Text style={styles.totalText}>Payment Method</Text>

        <AppRadioIcon />

      </View>

      <View style={styles.pageButtonWrapper}>
        <AppButton title='Pay Now' action={pay} />
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
  },
  totalWrapper:{
    height:'30%',
    justifyContent:'center',
    marginHorizontal:20,
  },
  totalText:{
    fontSize:18,
    marginBottom:20
  },
  totalValue:{
    fontSize:30,
    textAlign:'center'
  },
  paymentMethodWrapper:{
    height:'30%',
    marginHorizontal:20,
  },
  pageButtonWrapper:{
    height:'15%',
    justifyContent:'flex-end'
  },

})

export default Checkout