import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import AppHeader from '../../../../Components/AppHeader'
import AppButton from '../../../../Components/AppButton'
import CartItemsList from '../../../../Components/CartItemsList/CartItemsList'
import useFetchCart from '../../../../CustomHooks/useFetchCart'

const Cart = ({navigation}) => {

  const [data] = useFetchCart('@cartdata')

  const checkout = async() =>{
    const cartTotal = data?.reduce((currentTotal,item)=>{
      return currentTotal + item.price
    },0)
    navigation.navigate('Checkout',{cartTotal})
  }

  return (
    <View style={styles.container}>
      <AppHeader title='Cart' />

      

      {data?
      <>
      <View style={styles.cartListWrapper}>
      <CartItemsList data={data} />
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