import { View, Text, ScrollView, StyleSheet, TouchableOpacity,Image, Dimensions } from 'react-native'
import React,{useState,useRef} from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppHeader from '../../../../Components/AppHeader'
import Carousel from '../../../../Components/Carousel';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ProductInformation = ({navigation,route}) => {

  const {item} = route.params
  // console.log(item.images)

  const [activeimage, setActiveimage] = useState(0)
  const scrollRef = useRef();


  // 1 - 0
  // 2 - WIDTH
  // 3 - WIDTH*2

  const previous = () =>{
    // scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })
    // scrollToEnd({ animated: true })
    scrollRef.current.scrollTo({
      x: (activeimage-1)*WIDTH, y: 0, animated: true
    });
  }

  const next = () =>{
    // scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })
    // scrollToEnd({ animated: true })
    scrollRef.current.scrollTo({
      x: (activeimage+1)*WIDTH, y: 0, animated: true
    });
  }

  const onchange = (nativeEvent)=>{

    if(nativeEvent){
      const slide = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width)
      if(slide != activeimage){
        setActiveimage(slide)
      }
    }

  }



  return (
    <View style={styles.container}>
        <AppHeader title='ProductInfo' navigation={navigation} />
        
        <ScrollView>

          {/* <ScrollView
          scrollEventThrottle={16}
          ref={scrollRef}
          onScroll={({nativeEvent})=>onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
          >
            {item.images.map((e,index)=>{
              return(
                <Image 
              key={e} 
              // resizeMode='contain' 
              style={styles.wrap}
              source={{uri:e}}
              />
              )
            })}

          </ScrollView> */}

            {/* <TouchableOpacity onPress={()=>previous()}>
              <Text>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>next()}>
              <Text>Forward</Text>
            </TouchableOpacity> */}
          <Carousel images={item.images} />

          <View style={styles.infoWrapper}>
            <Text style={styles.infoTitle}>{item.title}</Text>
            <Text style={styles.infoDescription}>{item.description}</Text>

            <View style={styles.itemPriceWrapper}>
            <Text style={styles.itemPriceText}>Price</Text>
            <Text style={styles.itemPriceValue}>{item.price}$</Text>
            </View>
          </View>
          
        </ScrollView>


       
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    infoWrapper:{
      marginTop:20,
      marginHorizontal:'10%'
    },
    infoTitle:{
      fontSize:20
    },
    infoDescription:{
      marginTop:10
    },
    itemPriceWrapper:{
      marginTop:10,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    itemPriceText:{

    },
    itemPriceValue:{

    },
})

export default ProductInformation