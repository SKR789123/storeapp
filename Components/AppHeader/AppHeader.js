import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppHeader = ({title,navigation}) => {

  if(title=='Products'){
    return (
        <View style={styles.headerWrapper1}>
            <SafeAreaView></SafeAreaView>
            <Text style={styles.headerText}>{title}</Text>
        </View>
      )
  }
  if(title=='ProductInfo'){
    return (
        <View style={styles.headerWrapper2}>
            <SafeAreaView></SafeAreaView>
            <TouchableOpacity style={styles.headerButton} onPress={()=>navigation.pop()}>
            <MaterialCommunityIcons name={'chevron-left'} size={50} color={'#000'}  />
            </TouchableOpacity>
        </View>
      )
  }
  
}

const styles = StyleSheet.create({

    headerWrapper1:{
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'gray',
        paddingVertical:20
    },
    headerWrapper2:{
        alignItems:'flex-start',
        paddingVertical:20
    },
    headerText:{
        fontSize:20
    },
    headerButton:{
        // alignSelf:'flex-start'
    },

})

export default AppHeader