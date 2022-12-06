import { View, Text,FlatList, TouchableOpacity,Image,StyleSheet } from 'react-native'
import React from 'react'
import useFetchProducts from '../../CustomHooks/useFetchProducts';

const ProductList = () => {

    const [data] = useFetchProducts("https://dummyjson.com/products");

// const Item = ({ item, onPress, backgroundColor, textColor }) => (
//     <TouchableOpacity style={styles.product}>
//         <Text style={styles.itemTitle}>{item.title}</Text>
//         <Text style={styles.itemDescription}>{item.description}</Text>
//         <Image
//         style={styles.thumbnail}
//         source={{
//           uri: item.thumbnail,
//         }}
//       />
//     </TouchableOpacity>
// ); 

const renderItem = ({ item }) => {

    return (
        <TouchableOpacity style={styles.product}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Image
        style={styles.thumbnail}
        source={{
          uri: item.thumbnail,
        }}
      />
    </TouchableOpacity>
    );
  };

  return (
    <>
    {data && 
    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatlist}
      />
    }
    </>
  )
}

const styles = StyleSheet.create({
    flatlist:{
        marginHorizontal:20,
        marginTop:20,
        marginBottom:'40%'
    },
    product:{
        marginBottom:30
    },
    itemTitle:{
        fontSize:18,
        marginBottom:5
    },
    itemDescription:{
        marginBottom:5
    },
    thumbnail: {
    //   width: 50,
      height: 150,
    //   resizeMode:'contain'
    },
  });

export default ProductList