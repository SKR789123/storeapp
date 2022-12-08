import { useState, useEffect } from "react";



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

      });

      return cleanup = ()=>{
        mounted=false
      }

  }, [url]);
  
  return [data];
};

export default useFetchSingleProduct;