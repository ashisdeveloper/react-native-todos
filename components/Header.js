import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 38,
        height: 80,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 20,
        color: '#fff'
    }
})

export default Header
