import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const SearchBar = () => {
    return (
        <View>
            <View style={styles.textAreaView}>
                <TextInput style={styles.textAreaStyles}
                    placeholder="Search.."
                    placeholderTextColor="grey"
                />
                <Icon name="search" size={25} color="#999999" />
            </View>   
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    // css for searchbar
    textAreaView: {
        width: "90%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -20,
        marginLeft: "5%",
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#999999',
        marginBottom: 30,
    },
    textAreaStyles: {
        width: "86%",
        paddingLeft: 10,
        paddingVertical: 10,
        fontSize: 17,
    },
})