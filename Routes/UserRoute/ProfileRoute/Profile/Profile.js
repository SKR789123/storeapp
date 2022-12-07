import { View, Text,StyleSheet, ActivityIndicator } from 'react-native'
import React,{useContext} from 'react'

import { LoginContext } from '../../../../Contexts/LoginContext'

import useFetchUser from '../../../../CustomHooks/useFetchUser'

import AppHeader from '../../../../Components/AppHeader'
import Avatar from '../../../../Components/Avatar'
import UserInfoItem from '../../../../Components/UserInfoItem'
import AppButton from '../../../../Components/AppButton'

import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {

  const {setUser,user} = useContext(LoginContext)

  // const userObject = JSON.parse(user)
  
  const [data] = useFetchUser(`https://dummyjson.com/users/${user.id}`)

  const userData = [
    {
      id:1,
      iconName:'cake',
      title:'Birth date',
      value:data?.birthDate
    },
    {
      id:2,
      iconName:data?.gender=='male'?'gender-male':'gender-female',
      title:'',
      value:data?.gender.charAt(0).toUpperCase() + data?.gender.slice(1)
    },
    {
      id:3,
      iconName:'phone',
      title:'Contact',
      value:data?.phone
    },
    {
      id:4,
      iconName:'school',
      title:'Studies at',
      value:data?.university
    },
    {
      id:5,
      iconName:'map-marker-minus',
      title:'From',
      value:data?.address.city
    },
    {
      id:6,
      iconName:'bank',
      title:'Work at',
      value:data?.company.name
    },
    {
      id:7,
      iconName:'briefcase-variant',
      title:'Work as a',
      value:data?.company.title
    },
  ]

  const Logout = async() => {

    try {
      const deleteUser = await AsyncStorage.removeItem('@user')
      const deleteCart = await AsyncStorage.removeItem('@cartdata')
      setUser(null)

    } catch(e) {
      // error reading value
    }

  }
  
  return (
    <View style={styles.container}>

      {data?
      <>
       <AppHeader title={`${data.firstName} ${data.lastName}`} />
      <View style={styles.avatarWrapper}>
      <Avatar imageurl={data.image} />
      </View>
      
      <View style={styles.userInfoWrapper}>

        {userData?.map(user=>{
          return(
            <UserInfoItem key={user.id} iconName={user.iconName}  title={user.title} value={user.value} />
          )
        })}

      </View>

      <View style={styles.pageButtonWrapper}>
        <AppButton title='Logout' action={Logout} />
      </View>
      </>
      :
      <View style={styles.loaderWrapper}>
        <ActivityIndicator size="large" color="#645cfc" />
      </View>
      }
     

      
      
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1
  },
  avatarWrapper:{
    alignItems:'center',
    height:'20%',
    justifyContent:'center'
  },
  userInfoWrapper:{
    height:'50%',
    justifyContent:'center',
    marginHorizontal:15,
  },
  pageButtonWrapper:{
    height:'5%',
    justifyContent:'flex-end'
  },
  loaderWrapper:{
    height:'50%',
    justifyContent:'center'
  }

})

export default Profile