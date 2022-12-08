import {Image, StyleSheet } from 'react-native'
import React from 'react'

const Avatar = ({imageurl}) => {

  return (
    <Image style={styles.avatar}
    source={{
      uri: imageurl,
    }} />
  )
}

const styles = StyleSheet.create({

    avatar:{
        height:100,
        width:100,
        borderRadius:50,
        backgroundColor:'gray',
    }

})

export default Avatar