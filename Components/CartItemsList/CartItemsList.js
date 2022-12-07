import { View, Text,FlatList, TouchableOpacity,Image,StyleSheet, Alert } from 'react-native'
import React,{useState} from 'react'
import useFetchCart from '../../CustomHooks/useFetchCart';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartItemsList = ({navigation,data}) => {

    // const [data] = useFetchCart('@cartdata');
    // console.log(data) 

  const deleteItem = async(id) =>{
    // let listItemsCopy = [...listItems]
    const modifiedCart = data.filter(item=>{
      return item.id != id
    })
    try {

      if(data.length == 1){
        await AsyncStorage.removeItem('@cartdata')
        return
      }
      const newCartData = JSON.stringify(modifiedCart)
      await AsyncStorage.setItem('@cartdata', newCartData)
      testData = modifiedCart
      Alert.alert('Item deleted from cart')
    } catch (e) {
      Alert.alert(e.message)
      
    }

  }

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
            onPress={()=>deleteItem(item.id)}>
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
    {data && 
    <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeperatorView}
        keyExtractor={(item) => item.id}
        style={styles.flatlist}
      />
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

  });

export default CartItemsList