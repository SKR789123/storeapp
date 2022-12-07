import { View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

const UserInfoItem = ({iconName,title,value}) => {
  return (
    <View style={[styles.infoItemWrapper,{
        marginBottom:title=='Work as a'?0:'5%'
    }]}>
        <MaterialCommunityIcons name={iconName} size={20} color={'black'}  />
        <Text style={[styles.titleText,{
            marginHorizontal:title==''?0:5
        }]}>{title}</Text>
        <Text style={styles.valueText}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    infoItemWrapper:{
        flexDirection:'row',
        alignItems:'center',
        // marginBottom:'5%'
    },
    titleText:{
        fontSize:16,
        // marginHorizontal:5
        marginLeft:5
    },
    valueText:{
        fontSize:16,
        fontWeight:'bold'
    },
})

export default UserInfoItem