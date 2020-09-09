import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Header from './components/Header'
import TodoItems from './components/TodoItems'
import TodoInput from './components/TodoInput'

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy a Teaa", key: '1' },
    { text: "Buy a cofee", key: '2' },
    { text: "Buy a cosfee", key: '3' },
    { text: "Buy a cofee", key: '4' },
    { text: "Buy a csofee", key: '5' }
  ]);

  const onPressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const onSubmitTodoHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ]
      });
      Keyboard.dismiss();
    }
    else
      Alert.alert('Opps', 'Todo should be over 3 characters', [
        { text: 'Understood', onPress: () => console.log('Alert closed') }
      ])
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <TodoInput onSubmitTodoHandler={onSubmitTodoHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItems item={item} onPressHandler={onPressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    paddingHorizontal: 40,
    flex: 1,
  },
  list: {
    paddingTop: 20,
    marginBottom: 20,
    flex: 1,
  }
});
