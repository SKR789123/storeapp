import { useState, useEffect } from "react";



const useFetchSingleProduct = (url) => {

  const [data, setData] = useState(null);

  useEffect(() => {

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  
  return [data];
};

export default useFetchSingleProduct;