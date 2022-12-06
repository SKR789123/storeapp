import { View, Text, ScrollView, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppHeader from '../../../../Components/AppHeader'

const ProductInformation = ({navigation}) => {



  return (
    <View style={styles.container}>
        <AppHeader title='ProductInfo' navigation={navigation} />
        



       
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },

})

export default ProductInformation