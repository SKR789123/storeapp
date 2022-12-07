import { View, Text, ScrollView, StyleSheet, TouchableOpacity,Image, Dimensions } from 'react-native'
import React,{useState,useRef} from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ControlButton from './ControlButton';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Carousel = ({images}) => {

    const [activeimage, setActiveimage] = useState(0)
    const scrollRef = useRef();


  const previous = () =>{
    scrollRef.current.scrollTo({
        x: (activeimage-1)*(WIDTH*0.8), y: 0, animated: true
    });
  }
  const next = () =>{
    scrollRef.current.scrollTo({
        x: (activeimage+1)*(WIDTH*0.8), y: 0, animated: true
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
    <View style={styles.carouselWrapper}>
        {/* <TouchableOpacity style={styles.carouselButton} onPress={()=>previous()}>
            <MaterialCommunityIcons name={'chevron-left'} size={40} color={'#000'}  />
        </TouchableOpacity> */}
        <ControlButton type='previous' action={previous} />
            <ScrollView
            // contentContainerStyle={{alignItems:'center'}}
          scrollEventThrottle={16}
          ref={scrollRef}
          onScroll={({nativeEvent})=>onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.carousel}
          >
            {images.map((e,index)=>{
              return(
                <Image 
              key={e} 
              resizeMode='contain' 
              style={styles.carouselImage}
              source={{uri:e}}
              />
              )
            })}

          </ScrollView>
          <ControlButton type='next' action={next} />
          {/* <TouchableOpacity style={styles.carouselButton} onPress={()=>next()}>
            <MaterialCommunityIcons name={'chevron-right'} size={40} color={'#000'}  />
            </TouchableOpacity> */}

    </View>
  )
}

const styles = StyleSheet.create({

    carouselWrapper:{
        flexDirection:'row',
        alignItems:'center',
    },
    carousel:{
        width:WIDTH*0.8,
        height:HEIGHT/5,
        // backgroundColor:'#ffffff90'
    },
    carouselImage:{
        width:WIDTH*0.8,
        height:HEIGHT/5,
        // resizeMode:'contain'
    },
    // carouselButton:{
    //     width:'10%',
    //     alignItems:'center',
    //     justifyContent:'center'
    // },
    // wrap:{
    //   width:WIDTH,
    //   height:HEIGHT/4
    // }

})

export default Carousel