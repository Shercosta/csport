import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';

const ListItem = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Checkbox
                    value={props.selected}
                    onValueChange={props.onCheckboxSelect}
                    color={'black'}
                />
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <TouchableOpacity onPress={props.onDeleteTask}>
                <Image
                    source={require('../../assets/trashIcon.png')} style={{ height: 20, width: 20 }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        marginLeft: 20,
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default ListItem

