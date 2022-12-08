import { View, Text,FlatList, TouchableOpacity,Image,StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import useFetchProducts from '../../CustomHooks/useFetchProducts';

const ProductList = ({navigation}) => {

    const [data] = useFetchProducts("https://dummyjson.com/products");

const Item = ({ item}) => (
    <TouchableOpacity style={styles.product} onPress={()=>navigation.push('ProductInformation',{item})}>
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

const renderItem = ({ item }) => {

    return (
        <Item
        item={item}
      /> 
    );
  };

  return (
    <>
    {data? 
    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatlist}
      />
    :
    <View style={styles.loaderWrapper}>
        <ActivityIndicator size="large" color="#645cfc" />
      </View>
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
    loaderWrapper:{
      height:'50%',
      justifyContent:'center'
    }
  });

export default ProductList