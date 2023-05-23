import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Carousole from './CarousoleOne';
import Heading from './Heading';
import CarouselTwo from './CarouselTwo';
import CarouselThree from './CarouselThree';
import CarouselFour from './CarouselFour';
import FeaturedProducts from './FeaturedProducts';
import SpecialOffer from './SpecialOffer';
import SearchBar from './SearchBar';


const Home = () => {
    const image1 = require('../assets/images/botosmall.png')
    const image2 = require('../assets/images/tea.png')
    const image3 = require('../assets/images/pan.png')
    const image4 = require('../assets/images/saucer.png')
    const image5 = require('../assets/images/saucer2.png')
    const image6 = require('../assets/images/bowl.png')

    return (
        <ScrollView>
            <View style={{ backgroundColor: 'white'}}>
                <View style={{ backgroundColor: 'white', paddingTop: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10 }}>
                    <Image source={require('../assets/images/hamburger.jpg')} style={styles.hamBurger} />
                    <Image source={require('../assets/images/lfk.jpg')} style={styles.lkfImage} />
                    <Image source={require('../assets/images/white.jpg')} style={styles.whiteImage} />

                </View>
                <Carousole />
                <Heading categories="Categories" />
                <CarouselTwo />
                <Heading categories="Today's Deal" style={styles.extraMargin} />
                <CarouselThree />
                <Heading categories="Flash Deal" style={styles.extraMargin} />
                <CarouselFour />
                <Heading categories="Featured Products" style={styles.extraMargin} />
                <View style={{ display: 'flex', flexDirection: 'row'}}>
                    <View style={{marginLeft:12}}>
                        <FeaturedProducts
                        image={image1}
                            price="$60.00          "
                            span="     4.3k "
                            productname="Joeunga Cornus Fruit Juiceee"
                        />
                    </View>
                    <View>
                        <FeaturedProducts    
                            image={image2}
                            price="$25.00          "
                            span="     4.9k "
                            productname="Joeunga Brown Rice Turmeric Tea"
                        />
                    </View>
                </View>
                <SpecialOffer/>
                <Heading categories="Popular Products" style={styles.extraMargin} />
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{marginLeft:12}}>
                        <FeaturedProducts
                        image={image3}
                            price="$50.00          "
                            span="     4.7k "
                            productname="LFK Circle Gold Work (32cm)"
                        />
                    </View>
                    <View>
                          <FeaturedProducts    
                            image={image4}
                            price="$35.00          "
                            span="     4.9k "
                            productname="LFK Easy Pot (24cm)"
                        />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row',marginTop:20}}>
                    <View style={{marginLeft:12}}>
                        <FeaturedProducts
                        image={image5}
                            price="$39.00          "
                            span="     4.1k "
                            productname="Shiny LFK Pot (18cm)"
                        />
                    </View>
                    <View>
                          <FeaturedProducts    
                            image={image6}
                            price="$60.00          "
                            span="     4.6k "
                            productname="LFK Atramic Double Hand Work Pan (28cm)"
                        />
                    </View>
                </View>


            </View>
        </ScrollView>

    )
}

export default Home

const styles = StyleSheet.create({
    hamBurger: {
        width: 70,
        height: 50
    },
    lkfImage: {
        width: 150,
        height: 50
    },
    whiteImage: {
        width: 50,
        height: 100
    },

    
    extraMargin: {
        marginBottom: 30
    }
})