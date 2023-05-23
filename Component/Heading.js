import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Heading = ({ categories }) => {
    return (
        <View style={styles.head}>
            <Text style={styles.heading}>{categories}</Text>
            <TouchableOpacity>
            <Text style={styles.viewText}>View all</Text>
            </TouchableOpacity>            
        </View>
    )
}

export default Heading

const styles = StyleSheet.create({
    head: {
        width: "90%",
        marginLeft: "5%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom:25
    },
    heading: {
        fontSize: 25,
        fontWeight:500
    },
    viewText:{
        marginTop:10,
        color:"#f6b092",
        fontWeight:600

    }

})