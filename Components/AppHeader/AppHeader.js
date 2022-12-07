import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppHeader = ({title,navigation}) => {

//   if(title=='Products' || title=='Cart'){
//     return (
        // <View style={styles.headerWrapper1}>
        //     <SafeAreaView></SafeAreaView>
        //     <Text style={styles.headerText}>{title}</Text>
        // </View>
//       )
//   }
  if(title=='ProductInfo'){
    return (
        <View style={styles.headerWrapper2}>
            <SafeAreaView>
            <TouchableOpacity style={styles.headerButton} onPress={()=>navigation.pop()}>
            <MaterialCommunityIcons name={'chevron-left'} size={50} color={'#000'}  />
            </TouchableOpacity>
            </SafeAreaView>
            
        </View>
      )
  }
  else if(title=='Checkout'){
    return (
        <View style={styles.headerWrapper3}>
            <SafeAreaView style={styles.headerWrapper4}>
            <TouchableOpacity style={styles.headerButton} onPress={()=>navigation.pop()}>
            <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity disabled style={styles.headerButton}>
            <Text style={[styles.backButtonText,{
                color:'transparent'
            }]}>Back</Text>
            </TouchableOpacity>
            </SafeAreaView>
            
        </View>
      )
  }
  else{
      return(
        <View style={styles.headerWrapper1}>
            <SafeAreaView>
            <Text style={styles.headerText}>{title}</Text>
            </SafeAreaView>
           
        </View>
      )
  }
  
  
}

const styles = StyleSheet.create({

    headerWrapper1:{
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'gray',
        paddingVertical:'5%'
    },
    headerWrapper2:{
        alignItems:'flex-start',
        paddingVertical:'5%',
        // paddingVertical:20,
    },
    headerWrapper3:{
        // alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'gray',
        paddingVertical:'5%'
        // backgroundColor:'red'
    },
    headerWrapper4:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    backButtonText:{
        fontSize:18,
        marginLeft:20
    },
    headerText:{
        fontSize:20
    },
    headerButton:{
        // alignSelf:'flex-start'
    },

})

export default AppHeader