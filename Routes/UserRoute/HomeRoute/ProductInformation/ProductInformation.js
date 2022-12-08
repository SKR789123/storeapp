import { View, Text, ScrollView, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import React,{useState,useRef} from 'react'

import AppHeader from '../../../../Components/AppHeader'
import Carousel from '../../../../Components/Carousel';

import StarRating from '../../../../Components/StarRating';
import Slider from '@react-native-community/slider';
import AppButton from '../../../../Components/AppButton';

import Database from '../../../../Database/Database';

import useFetchSingleProduct from '../../../../CustomHooks/useFetchSingleProduct';

const ProductInformation = ({navigation,route}) => {


  const {productId} = route.params

  const [data] = useFetchSingleProduct(`https://dummyjson.com/products/${productId}`)

  const [quantity, setQuantity] = useState(1)
  const sliderRef = useRef()
  const minimum = 1

  const addItem = async(id,title,price,thumbnail) =>{

    try{
      const data = {
        id:id,
        title:title,
        quantity:quantity,
        price:price*quantity,
        thumbnail:thumbnail
      }

      const addData = await Database.addToCart('@cartdata',data)
      Alert.alert(addData)
    }
    catch(err){
      Alert.alert(err.message)
    }

  }


  return (
    <View style={styles.container}>
        <AppHeader title='ProductInfo' navigation={navigation} />
        
        {data?
        data != 'empty'?
        <ScrollView>

        <Carousel images={data.images} />

        <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>{data.title}</Text>
          <Text style={styles.infoDescription}>{data.description}</Text>

          <View style={styles.itemPriceWrapper}>
          <Text style={styles.itemPriceText}>Price</Text>
          <Text style={styles.itemPriceValue}>{data.price}$</Text>
          </View>
          
          <View style={styles.itemRatingsWrapper}>
            <Text style={styles.itemRatingText}>Feedback</Text>
            <StarRating rating={data.rating} />
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
                // onSlidingComplete={value=>setQuantity(value)}
                minimumValue={minimum}
                maximumValue={data.stock}
                minimumTrackTintColor="#645cfc"
                thumbTintColor="#645cfc"
                maximumTrackTintColor="#DCDCDC"
              />
              <Text style={styles.sliderSideAmount}>{data.stock}</Text>
            </View>

          </View>
          

          

        </View>

        <View style={styles.pageButtonWrapper}>

        <AppButton title={`Add to Cart (${quantity})`} 
        action={()=>addItem(data.id,data.title,data.price,data.thumbnail)} 
        />
        </View>
        
      </ScrollView>
      :
      <View style={styles.emptyInfo}>
        <Text>Nothing to be shown</Text>
      </View>
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
    loaderWrapper:{
      height:'50%',
      justifyContent:'center'
    },
    emptyInfo:{
      alignItems:'center',
      height:'50%',
      justifyContent:'center'
    }
})

export default ProductInformation