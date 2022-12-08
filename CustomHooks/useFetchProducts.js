import { useState, useEffect } from "react";

const useFetchProducts = (url) => {
  const [data, setData] = useState(null);


  useEffect(() => {


    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, [url]);

  return [data];
};

export default useFetchProducts;