import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'

import AppHeader from '../../../../Components/AppHeader'
import AppButton from '../../../../Components/AppButton'
import CartItemsList from '../../../../Components/CartItemsList/CartItemsList'


import Database from '../../../../Database/Database'

const Cart = ({navigation}) => {

  return (
    <View style={styles.container}>
      <AppHeader title='Cart' />

      <CartItemsList navigation={navigation} />
   
    </View>
  )
}

const styles = StyleSheet.create({
  //10% height for header
  container:{
    flex:1
  },
  cartListWrapper:{
    height:'65%'
  },
  pageButtonWrapper:{
    height:'10%',
    justifyContent:'flex-end'

  },
  cartPageText:{
    textAlign:'center',
    marginTop:'40%'
  }

})

export default Cart