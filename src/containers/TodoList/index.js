import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../../redux/actions';
const TodoList = () => {
  const [todoItem, setTodoItem] = React.useState('');
  const todoList = useSelector((state) => state.todoReducer.todoList);
  const dispatch = useDispatch();
  console.log('todoList', todoList);

  const addItem = () => {
    let listItem = {id: todoList.length + 1, title: todoItem};
    console.log('listItem', listItem);
    dispatch(addTodo(listItem));
    setTodoItem('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          onChangeText={(text) => setTodoItem(text)}
          placeholder={'Enter Text Here'}
          autoFocus={true}
          value={todoItem}
        />

        <TouchableOpacity onPress={addItem}>
          <Icon name={'pluscircle'} color="green" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputView: {
    flexDirection: 'row',
    margin: 5,
    borderColor: 'grey',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
