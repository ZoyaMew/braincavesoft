import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FeaturedProducts = (props) => {
    return (
        <View style={styles.fphead}>
            <View style={styles.productDetail}>
                <View style={{
                    shadowColor: 'black', shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.5, shadowRadius: 5 
                }}>
                    <Image style={styles.productImage} source={props.image} />
                </View>
                <View style={styles.priceStock}>
                    <Text>{props.price}</Text>
                    <Text style={styles.stockmoney}>
                        <Text><Text style={styles.span}>{props.span}</Text>Sold</Text>
                    </Text>
                </View>
                <Text style={styles.productName}>{props.productname}</Text>
            </View>
        </View>
    )
}

export default FeaturedProducts

const styles = StyleSheet.create({
    fphead: {
        width: "90%",
        display: 'flex',
        flexDirection: 'row',
        marginLeft: "6%",
        backgroundColor:'white'

    },
    productDetail: {
        width: "45%",
        marginRight: '3%',
    },
    productImage: {
        width: 170,
        height: 150,
        borderRadius: 10,

    },
    span: {
        color: 'red',
    },
    priceStock: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop:10

    },
    stockmoney: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    productName: {
        fontSize: 16,
        fontWeight: 500,
        width: '200%',
        marginTop:8
    },
})