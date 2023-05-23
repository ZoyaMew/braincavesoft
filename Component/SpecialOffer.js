import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const SpecialOffer = () => {
  return (
    <View>
      <Image source={require('../assets/images/special-offer.png')} style={styles.offer} />
    </View>
  )
}

export default SpecialOffer

const styles = StyleSheet.create({
    offer:{
        width:400,
        height:150,
        marginTop:10,
        marginBottom:7,
    }
})