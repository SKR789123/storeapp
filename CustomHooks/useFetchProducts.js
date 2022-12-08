import { useState, useEffect } from "react";

const useFetchProducts = (url) => {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(null)


  useEffect(() => {

    let mounted = true

    fetch(url)
      .then((res) => res.json())
      .then((data) => {

        if(mounted){
          setData(data.products)
          setTotal(data.total)
        }
        
      });

      return cleanup = ()=>{
        mounted=false
      }


  }, [url]);

  return [data,total];
};

export default useFetchProducts;