import { View, StyleSheet, ActivityIndicator, Alert } from 'react-native'
import React,{useContext} from 'react'

import { LoginContext } from '../../../../Contexts/LoginContext'

import useFetchUser from '../../../../CustomHooks/useFetchUser'

import AppHeader from '../../../../Components/AppHeader'
import Avatar from '../../../../Components/Avatar'
import UserInfoItem from '../../../../Components/UserInfoItem'
import AppButton from '../../../../Components/AppButton'

import Database from '../../../../Database/Database'

const Profile = () => {

  const {setUser,user} = useContext(LoginContext)
  
  const [data,userdata] = useFetchUser(`https://dummyjson.com/users/${user.id}`)


  const Logout = async() => {

    try {
      const deleteUserData = await Database.removeCurrentUserData('@user','@cartdata')
      setUser(null)

    } catch(e) {
      Alert.alert(e.message)
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

        {userdata?.map(user=>{
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