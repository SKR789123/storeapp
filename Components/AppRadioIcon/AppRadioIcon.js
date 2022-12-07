import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AppRadioIcon = () => {
  return (
    <View style={styles.iconWrapper}>
        <View style={styles.outer}>
        <View style={styles.inner}/>
        </View>
        <Text>Cash On Delivery</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({

    iconWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
        // marginTop:20
    },
    outer:{
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'gray',
        backgroundColor:'gray',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:10
    },
    inner:{
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#f2f2f2',
    }

})

export default AppRadioIcon