import { useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const useFetchUser = (url) => {

  const [data, setData] = useState(null);



  useEffect(() => {

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  
  return [data];
};

export default useFetchUser;