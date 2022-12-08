import { View, Text,FlatList, TouchableOpacity,Image,StyleSheet, ActivityIndicator, Alert } from 'react-native'
import React,{useEffect,useState,useRef, useCallback} from 'react'
import useFetchProducts from '../../CustomHooks/useFetchProducts';

const ProductList = ({navigation}) => {

    const [currentset, setCurrentset] = useState(0)

    //fetching only the data necessary to render the product list
    const [data,total] = useFetchProducts(`https://dummyjson.com/products?skip=${currentset}&select=title,description,thumbnail`);

    

const nextPage = () =>{

  //check for end of products list api
  if(total-currentset>30){
    setCurrentset(currentset+30)
    flatlistref.current.scrollToOffset({ animated: true, offset: 0 });
    return
  }
  Alert.alert('You have reached the end')
  
}

const previousPage = () =>{
  setCurrentset(currentset-30)
  // flatlistref.current.scrollToEnd({animated: true})
}

const flatlistref = useRef()


//re-render on going next/previous
useEffect(()=>{


},[currentset])

const Item = ({ item}) => (
    <TouchableOpacity style={styles.product} onPress={()=>navigation.push('ProductInformation',{productId:item.id})}>
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

const Footer = () => {
  return (
    <TouchableOpacity style={styles.navigationButton} onPress={()=>nextPage()}>
      <Text>Next Page</Text>
    </TouchableOpacity>
  )
}

const Header = () => {
  return (
    <TouchableOpacity style={styles.navigationButton} onPress={()=>previousPage()}>
      <Text>Previous Page</Text>
    </TouchableOpacity>
  )
}

const baseRenderItem = ({ item }) => {

    return (
        <Item
        item={item}
      /> 
    );
  };

const renderItem = useCallback(baseRenderItem,[data])

  return (
    <>
    {data? 
    <FlatList
        ref={flatlistref}
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={currentset>0?Header:null}
        ListFooterComponent={Footer}
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
        marginBottom:'50%'
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
    },
    navigationButton:{
      alignSelf:'center',
    }
  });

export default ProductList