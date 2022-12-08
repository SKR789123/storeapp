import { useState, useEffect } from "react";

const useFetchProducts = (url) => {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(null)


  useEffect(() => {


    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.products)
        setTotal(data.total)
      });
  }, [url]);

  return [data,total];
};

export default useFetchProducts;