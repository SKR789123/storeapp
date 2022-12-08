import { useState, useEffect } from "react";

const useFetchProducts = (url) => {
  const [data, setData] = useState(null);

  // const getData = async() =>{
  //   const {products} = await Helpers.getProducts(url)
  //   return products
  // }

  useEffect(() => {

    // const productdata = getData()
    // setData(productdata)

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, [url]);

  return [data];
};

export default useFetchProducts;