import { View, Text, ScrollView, StyleSheet, TouchableOpacity,Image, Dimensions,Alert } from 'react-native'
import React,{useState,useRef} from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppHeader from '../../../../Components/AppHeader'
import Carousel from '../../../../Components/Carousel';

import StarRating from '../../../../Components/StarRating';
import Slider from '@react-native-community/slider';
import AppButton from '../../../../Components/AppButton';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Helpers from '../../../../Helpers/Helpers';

// const WIDTH = Dimensions.get('window').width;

const ProductInformation = ({navigation,route}) => {

  const {item} = route.params

  const [quantity, setQuantity] = useState(1)
  const sliderRef = useRef()
  const maximum = 10
  const minimum = 1



  const addToCart = async() =>{
    try {

      const data = {
        id:item.id,
        title:item.title,
        quantity:quantity,
        price:item.price*quantity,
        thumbnail:item.thumbnail
      }

      let cartdata

      const existingCart = await AsyncStorage.getItem('@cartdata')

      if(existingCart){
          let existingCartObject = JSON.parse(existingCart)
          const itemExists = existingCartObject.filter(cartitem=>{
            return cartitem.id == item.id
          }).length
          
          if(itemExists){
            Alert.alert('Item already exists in cart')
            return;
          }
          existingCartObject.push(data)
          cartdata =  JSON.stringify(existingCartObject)
          await AsyncStorage.setItem('@cartdata', cartdata)
          Alert.alert('Item added to existing cart')
          
      }
      else{
        cartdata =  JSON.stringify([data])
        await AsyncStorage.setItem('@cartdata', cartdata)
        Alert.alert('Item added to new cart')
      }
      
      
    } catch (e) {
      console.log(e)
    }
  }

  const getCartData = async () =>{

    try {
      const jsonValue = await AsyncStorage.getItem('@cartdata')
      console.log(jsonValue)
    } catch(e) {
      console.log(e)
    }

  }


  const deleteCart = async() =>{
    try {
      const jsonValue = await AsyncStorage.removeItem('@cartdata')
      console.log(jsonValue)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.container}>
        <AppHeader title='ProductInfo' navigation={navigation} />
        
        <ScrollView>

          <Carousel images={item.images} />

          <View style={styles.infoWrapper}>
            <Text style={styles.infoTitle}>{item.title}</Text>
            <Text style={styles.infoDescription}>{item.description}</Text>

            <View style={styles.itemPriceWrapper}>
            <Text style={styles.itemPriceText}>Price</Text>
            <Text style={styles.itemPriceValue}>{item.price}$</Text>
            </View>
            
            <View style={styles.itemRatingsWrapper}>
              <Text style={styles.itemRatingText}>Feedback</Text>
              <StarRating rating={item.rating} />
            </View>

            <View style={styles.quantityWrapper}>

              <Text style={styles.quantityText}>Quantity</Text>

              <View style={styles.sliderWrapper}>
                <Text style={styles.sliderSideAmount}>{minimum}</Text>
                <Slider
                  style={{width: 200, height: 40}}
                  step={1}
                  ref={sliderRef}
                  tapToSeek
                  onValueChange={value=>setQuantity(value)}
                  minimumValue={minimum}
                  maximumValue={maximum}
                  minimumTrackTintColor="#645cfc"
                  thumbTintColor="#645cfc"
                  maximumTrackTintColor="#DCDCDC"
                />
                <Text style={styles.sliderSideAmount}>{maximum}</Text>
              </View>

            </View>
            

            

          </View>

          <View style={styles.pageButtonWrapper}>

          <AppButton title={`Add to Cart (${quantity})`} 
          action={addToCart} 
          />
          <AppButton title={`Delete Cart (${quantity})`} 
          action={deleteCart} 
          />
          <AppButton title={`Get Data `} 
          action={getCartData} 
          />
          </View>
          
        </ScrollView>


       
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    infoWrapper:{
      marginTop:20,
      marginHorizontal:'10%'
    },
    infoTitle:{
      fontSize:20
    },
    infoDescription:{
      marginTop:10
    },
    itemPriceWrapper:{
      marginTop:10,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    itemPriceText:{

    },
    itemPriceValue:{

    },
    itemRatingsWrapper:{
      marginTop:10,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    itemRatingText:{

    },
    quantityWrapper:{
      marginTop:30,
      alignItems:'center'
    },
    quantityText:{

    },
    sliderWrapper:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    sliderSideAmount:{

    },
    pageButtonWrapper:{
      marginVertical:'20%'
    },
})

export default ProductInformation