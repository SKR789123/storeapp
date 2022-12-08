import { View, ScrollView, StyleSheet,Image, Dimensions } from 'react-native'
import React,{useState,useRef} from 'react'
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
  
        <ControlButton disabled={activeimage==0} type='previous' action={previous} />
            <ScrollView
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
          <ControlButton disabled={activeimage+1==images.length} type='next' action={next} />

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
    },
    carouselImage:{
        width:WIDTH*0.8,
        height:HEIGHT/5,
        // resizeMode:'contain'
    },

})

export default Carousel