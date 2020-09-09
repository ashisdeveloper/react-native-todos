import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

function TodoInput({ onSubmitTodoHandler }) {
    const [text, setText] = useState('');
    const ontextChangeHandler = val => {
        setText(val)
    }
    return (
        <View>
            <TextInput style={styles.input} onChangeText={ontextChangeHandler} placeholder="Enter Todo name" />
            <Button onPress={() => onSubmitTodoHandler(text)} title="Add Todo" color="coral" />
        </View>
    )
}

export default TodoInput

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 10,
        marginTop: 10
    }
})