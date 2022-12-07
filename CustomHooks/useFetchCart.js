import { useState, useEffect,useCallback } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
const useFetchCart = (key) => {

  const [data, setData] = useState(null);

  // try {
  //   const jsonValue = await AsyncStorage.getItem('@cartdata')
  //   console.log(jsonValue)
  // } catch(e) {
  //   console.log(e)
  // }

  useFocusEffect(

    useCallback(()=>{

      AsyncStorage.getItem(key)
      .then((res) => JSON.parse(res))
      .then((data) => setData(data));

      
    },[key]),

  )
  return [data];

  // useEffect(() => {

  //   // const productdata = getData()
  //   // setData(productdata)

  //   AsyncStorage.getItem(key)
  //     .then((res) => JSON.parse(res))
  //     .then((data) => setData(data));
  // }, [key]);

  // return [data];
};

export default useFetchCart;