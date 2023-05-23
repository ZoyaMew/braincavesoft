import { StyleSheet, Image, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'



const CarousoleOne = () => {

    const images = [
        require('../assets/images/utcarousel.jpg'),
        require('../assets/images/utcarousel.jpg'),
        require('../assets/images/utcarousel.jpg')
    ]

    return (
        <View>
            <SliderBox images={images}
                dotColor="#f6c492"
                inactiveDotColor="lightgrey"
                autoplay={true}
                autoplayInterval={3000}
                circleloop={true}
                loop
                autoplayTimeout={1500}
                dotStyle={{
                    marginTop: 0,
                    width: 12,
                    height: 12,
                    borderRadius: 10,
                    marginRight: -8

                }}
            />

        </View>
    )
}

export default CarousoleOne

const styles = StyleSheet.create({
    container: {
        marginTop: 100
    },

})