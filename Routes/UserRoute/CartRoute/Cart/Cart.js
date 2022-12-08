import { View, StyleSheet } from 'react-native'
import React from 'react'

import AppHeader from '../../../../Components/AppHeader'
import CartItemsList from '../../../../Components/CartItemsList/CartItemsList'


const Cart = ({navigation}) => {

  return (
    <View style={styles.container}>
      <AppHeader title='Cart' />

      <CartItemsList navigation={navigation} />
   
    </View>
  )
}

const styles = StyleSheet.create({
  
  container:{
    flex:1
  },

})

export default Cart