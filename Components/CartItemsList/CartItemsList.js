import { View, Text,FlatList, TouchableOpacity,Image,StyleSheet, Alert } from 'react-native'
import React,{useState,useCallback} from 'react'

import { useFocusEffect } from '@react-navigation/native';
import Database from '../../Database/Database';
import AppButton from '../AppButton';

const CartItemsList = ({navigation}) => {


    const [cartdata, setCartdata] = useState(null)

    const checkout = async() =>{
      try{
        const cartTotal = await Database.getCartTotal('@cartdata')
        navigation.navigate('Checkout',{cartTotal})
      }
      catch(err){
        Alert.alert(err.message)
      }
    }

    const getCartItems = async () => {
      try {
        const cartObject = await Database.getCartData('@cartdata');
        if (cartObject) {
          setCartdata(cartObject);
          return
        }
      } catch (error) {
        Alert.alert(error.message)
      }
    };

    const removeItem = async(id) =>{

      

      try{
        if(cartdata.length==1){
          const removeData = await Database.emptyCart('@cartdata',modifiedCart)
          Alert.alert('Cart cleared')
          setCartdata(null)
          // navigation.navigate('HomeRoute')
          return
        }
        let cardDataCopy = [...cartdata]
        const modifiedCart = cardDataCopy.filter(item=>{
          return item.id != id
        })
        const newCartData = JSON.stringify(modifiedCart)
        const removeData = await Database.removeFromCart('@cartdata',newCartData)
        setCartdata(modifiedCart)
        Alert.alert(removeData)


      }
      catch(err){
        Alert.alert(err.message)
      }

    }

    const confirmationDialog = (id,title) =>
    Alert.alert(
      "Delete Item",
      `Are you sure to delete ${title} from the cart?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => removeItem(id) }
      ]
    );


    useFocusEffect(

      useCallback(()=>{
  
        getCartItems()
  
        
      },[]),
  
    )

  

const Item = ({ item},index) => (
    <View style={styles.cartItemWrapper} onPress={()=>navigation.push('ProductInformation',{item})}>

        <View style={styles.thumbnailWrapper}>
        <Image
        style={styles.thumbnail}
        source={{
          uri: item.thumbnail,
        }}
        />
        </View>
        

        <View style={styles.cartItemMiddleWrapper}>

          <Text style={styles.itemTitleText}>{item.title}</Text>

          <View style={styles.cartItemMiddleSecondRowWrapper}>
            <Text style={styles.itemQuantityText}>{`Quantity ${item.quantity}`}</Text>
            <TouchableOpacity style={styles.itemButton}
            onPress={()=>confirmationDialog(item.id,item.title)}>
              <Text style={styles.itemButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.itemPriceWrapper}>
        <Text style={styles.itemPriceValue}>{item.price}$</Text>
        </View>
        

    </View>
); 

const renderItem = ({ item }) => {

    return (
        <Item
        item={item}
      /> 
    );
  };

const ItemSeperatorView = ()=>{
  return (
    <View style={styles.separator}>
    </View>
  )
}
  return (
    <>
    {cartdata? 
    <>
    <View style={styles.cartListWrapper}>
      <FlatList
          data={cartdata}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeperatorView}
          keyExtractor={(item) => item.id}
          style={styles.flatlist}
        />
    </View>
    <View style={styles.pageButtonWrapper}>
        <AppButton title='Checkout' 
            action={checkout} 
        />
    </View>
    </>
    :
    <Text style={styles.cartPageText}>Cart is empty</Text>
    }
    </>
  )
}

const styles = StyleSheet.create({
    flatlist:{
      marginHorizontal:20,
      marginTop:20,
      // height:'60%',
      // marginBottom:'50%'
    },
    separator:{
      width:'100%',
      alignSelf:'center',
      borderColor:'gray',
      borderWidth:1,
      marginVertical:20
    },
    cartItemWrapper:{
      // marginBottom:30,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    thumbnailWrapper:{
      width:'20%'
    },
    thumbnail:{
      width:50,
      height:50,
      resizeMode:'contain',
      backgroundColor:'white'
    },
    cartItemMiddleWrapper:{
      width:'60%',
    },
    itemTitleText:{
      fontSize:18
    },
    cartItemMiddleSecondRowWrapper:{
      marginTop:5,
      flexDirection:'row',
    },
    itemQuantityText:{
      paddingRight:10
    },
    itemButton:{

    },
    itemButtonText:{
      color:'red'
    },
    itemPriceWrapper:{
      width:'20%'
    },
    itemPriceValue:{
      textAlign:'right',
      fontSize:18
    },
    //10% height for parent screen header
    cartListWrapper:{
    height:'65%'
    },
    pageButtonWrapper:{
      height:'10%',
      justifyContent:'flex-end'
    },
    cartPageText:{
      textAlign:'center',
      marginTop:'40%'
    }

  });

export default CartItemsList