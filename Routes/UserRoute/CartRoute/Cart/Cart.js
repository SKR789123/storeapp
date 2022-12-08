import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'

import AppHeader from '../../../../Components/AppHeader'
import AppButton from '../../../../Components/AppButton'
import CartItemsList from '../../../../Components/CartItemsList/CartItemsList'
import useFetchCart from '../../../../CustomHooks/useFetchCart'

import Database from '../../../../Database/Database'

const Cart = ({navigation}) => {

  const [data] = useFetchCart('@cartdata')

  const checkout = async() =>{
    try{
      const cartTotal = await Database.getCartTotal('@cartdata')
      navigation.navigate('Checkout',{cartTotal})
    }
    catch(err){
      Alert.alert(err.message)
    }
  }

  return (
    <View style={styles.container}>
      <AppHeader title='Cart' />

      

      {data?
      <>
      <View style={styles.cartListWrapper}>
      <CartItemsList navigation={navigation} />
      </View>
      
      <View style={styles.pageButtonWrapper}>
        <AppButton title='Checkout' 
            action={checkout} 
        />
      </View>
      </>
      :
      <Text style={styles.cartPageText}>Cart is empty</Text>
      }


      

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