import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'


const CarouselTwo = () => {
    const images = [
        require('../assets/images/three-image-sec.jpeg'),
        require('../assets/images/three-image-sec.jpeg'),
        require('../assets/images/three-image-sec.jpeg')
    ]
  return (
    <View style={styles.carouselView}>
            <SliderBox images={images}
                dotColor="#f6c492"
                inactiveDotColor="lightgrey"
                autoplay={true}
                autoplayInterval={3000}
                circleloop={true}
                loop
                autoplayTimeout={1500}
                width={100}
                dotStyle={{
                    marginBottom: 20,
                    width: 12,
                    height: 12, 
                    borderRadius:10,
                    marginRight: -8
                }}
            />

        </View>
  )
}

export default CarouselTwo

const styles = StyleSheet.create({
    carouselView:{
        width: '100%',
        
    }
})