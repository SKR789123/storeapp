import AsyncStorage from "@react-native-async-storage/async-storage";

const addToCart = async (key,data) => {
    try {
      let cartdata
      const existingCart = await AsyncStorage.getItem(key)
      if(existingCart){
        let existingCartObject = JSON.parse(existingCart)
        const itemExists = existingCartObject.filter(cartitem=>{
          return cartitem.id == data.id
        }).length
        
        if(itemExists){
          return 'Item already exists in cart';
        }
        existingCartObject.push(data)
        cartdata =  JSON.stringify(existingCartObject)
        await AsyncStorage.setItem(key, cartdata)
        return 'Item added to existing cart'
        
      }
      else{
        cartdata = JSON.stringify([data])
        await AsyncStorage.setItem('@cartdata', cartdata)
        return 'Item added to new cart'
      }
    } catch (e) {
      return e.message;
    }
  };

const getCartData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      return null;
    }
};

const removeFromCart = async (key,data) => {

    try {
      await AsyncStorage.setItem(key, data)
      return 'Item deleted from cart'
    } catch (e) {
      return e.message
    }
};

const emptyCart = async (key) => {

  try {
    await AsyncStorage.removeItem(key);
    return true
  } catch (e) {
    return e.message
  }
};


const getCartTotal = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    const cartObject = JSON.parse(jsonValue)
    const cartTotal = cartObject.reduce((currentTotal,item)=>{
      return currentTotal + item.price
    },0)
    return cartTotal
  } catch (e) {
    console.log("Error in Removing token");
  }
};

const removeCurrentUserData = async (key1,key2) => {

  try {
    await AsyncStorage.multiRemove([key1,key2]);
    return true
  } catch (e) {
    return e.message
  }
};

const setUserData = async (key,data) => {

  try {
    await AsyncStorage.setItem(key,data);
    return true
  } catch (e) {
    return e.message
  }
};

const getUserData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return null;
  }
};



export default { addToCart, getCartData, removeFromCart,emptyCart,getCartTotal,removeCurrentUserData,setUserData,getUserData };