import { View } from 'react-native'
import React from 'react'

import AppHeader from '../../../../Components/AppHeader'
import ProductList from '../../../../Components/ProductList'

const Products = ({navigation}) => {
  return (
    <View>
        <AppHeader title='Products' />

        <ProductList navigation={navigation} />
      
      
    </View>
  )
}

export default Products