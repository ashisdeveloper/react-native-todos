import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { Octicons } from '@expo/vector-icons';

function TodoItems({ item, onPressHandler }) {
    return (
        <TouchableOpacity onPress={() => onPressHandler(item.key)}>
            <View style={styles.item}>
                <Octicons name="triangle-right" size={20} color="black" />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#bbb',
        borderStyle: 'dashed',
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10
    }
})

export default TodoItems
