import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import AppHeader from '../../../../Components/AppHeader'
import AppButton from '../../../../Components/AppButton'
import CartItemsList from '../../../../Components/CartItemsList/CartItemsList'

const Cart = ({navigation}) => {

  const checkout = () =>{
    navigation.navigate('Checkout')
  }

  return (
    <View style={styles.container}>
      <AppHeader title='Cart' />

      <View style={styles.cartListWrapper}>
      <CartItemsList />
      </View>
      
      <View style={styles.pageButtonWrapper}>
      <AppButton title='Checkout' 
          action={checkout} 
      />
      </View>
      

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

})

export default Cart