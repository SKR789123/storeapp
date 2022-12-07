import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ControlButton = ({type,action}) => {
    const iconName = type=='previous'?'chevron-left':'chevron-right'
  return (
    <TouchableOpacity style={styles.carouselButton} onPress={action}>
            <MaterialCommunityIcons name={iconName} size={40} color={'#000'}  />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    carouselButton:{
        width:'10%',
        alignItems:'center',
        justifyContent:'center'
    },
})

export default ControlButton