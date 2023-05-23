import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'


const CarouselFour = () => {
    const images = [
        require('../assets/images/two-utensil-image.jpeg'),
        require('../assets/images/two-utensil-image.jpeg'),
        require('../assets/images/two-utensil-image.jpeg')

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
        height={250}
        dotStyle={{
            width: 12,
            height: 12,
            borderRadius: 10,
            marginRight: -8
        }}
    />

</View>
  )
}

export default CarouselFour

const styles = StyleSheet.create({})