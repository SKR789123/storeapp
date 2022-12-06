import axios from 'axios'

const getProducts = async(url) =>{

    try {
        const response = await axios.get(url);
        const products = response.data
        return products
      } catch (error) {
        console.log(error);
      }

}

export default {getProducts}