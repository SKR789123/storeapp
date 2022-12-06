import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const AppHeader = ({title}) => {
  return (
    <View style={styles.headerWrapper}>
        <SafeAreaView></SafeAreaView>
        <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    headerWrapper:{
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'gray',
        paddingVertical:20
    },
    headerText:{
        fontSize:20
    }

})

export default AppHeader