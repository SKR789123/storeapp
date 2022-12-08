import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'

const AppLoader = () => {
  return (
    <View style={styles.loaderWrapper}>
            <Text style={styles.loaderText}>App Loading</Text>
            <ActivityIndicator size="large" color="#645cfc" />
    </View>
  )
}

const styles = StyleSheet.create({
    loaderWrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    loaderText:{
        fontSize:20
    }
})

export default AppLoader