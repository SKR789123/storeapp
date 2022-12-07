import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
const getProducts = async(url) =>{

    try {
        const response = await axios.get(url);
        const products = response.data
        return products
      } catch (error) {
        console.log(error);
      }

}

const addToCart = async(itemdata) =>{
  try {

    console.log(itemdata)



    let cartdata

    const existingCart = await AsyncStorage.getItem('@cartdata')

    if(existingCart){
        let existingCartObject = JSON.parse(existingCart)
        existingCartObject.push(itemdata)
        cartdata =  JSON.stringify(existingCartObject)
        await AsyncStorage.setItem('@cartdata', cartdata)
        console.log('added to existing cart')
    }
    else{
      cartdata =  JSON.stringify([itemdata])
      await AsyncStorage.setItem('@cartdata', cartdata)
      console.log('added to new cart')
    }
    
    
  } catch (e) {
    console.log(e)
  }
}

export default {getProducts,addToCart}