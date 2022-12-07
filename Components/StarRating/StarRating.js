import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StarRating = ({rating}) => {

  
    const roundedRating = Math.round(rating)


  return (
    <View style={styles.starsWrapper}>
      {Array(5).fill().map((item,index)=>{
          if(index<roundedRating){
            return(
                <MaterialCommunityIcons key={index} name={'star'} size={20} color={'#645cfc'}  />
              )
          }
          else{
            return(
                <MaterialCommunityIcons key={index} name={'star'} size={20} color={'#DCDCDC'}  />
              )
          }
          
      })}
    </View>
  )
}

const styles=StyleSheet.create({

    starsWrapper:{
        flexDirection:'row'
    }

})

export default StarRating