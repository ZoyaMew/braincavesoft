import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'


const CarouselThree = () => {
    const images = [
        require('../assets/images/product-image12.jpeg'),
        require('../assets/images/product-image12.jpeg'),
        require('../assets/images/product-image12.jpeg')

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
                height={240}
                dotStyle={{
                    marginTop: 30,
                    width: 12,
                    height: 12,
                    borderRadius: 10,
                    marginRight: -8
                }}
            />

        </View>
    )
}

export default CarouselThree

const styles = StyleSheet.create({

})