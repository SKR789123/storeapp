import { useState, useEffect } from "react";
import { Alert } from "react-native";



const useFetchSingleProduct = (url) => {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        
        if(mounted){
          setData(data)
        }

      })
      .catch(err=>{
        setData('empty')
        Alert.alert(err.message)
      })

      return cleanup = ()=>{
        mounted=false
      }

  }, [url]);
  
  return [data];
};

export default useFetchSingleProduct;