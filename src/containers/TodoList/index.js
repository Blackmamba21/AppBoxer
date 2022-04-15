import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, deleteTodo} from '../../redux/actions';
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

  const deleteItem = (item) => {
    dispatch(deleteTodo(item));
  };

  const listSeparator = () => {
    return <View style={{height: 1, margin: 5, backgroundColor: 'grey'}} />;
  };

  const renderTodoList = (item, index) => {
    return (
      <View style={styles.listTopView}>
        <Text>{item.title}</Text>
        <TouchableOpacity onPress={() => deleteItem(item)}>
          <Icon name={'delete'} color="green" size={30} />
        </TouchableOpacity>
      </View>
    );
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
      <FlatList
        data={todoList}
        renderItem={({item, index}) => renderTodoList(item, index)}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={listSeparator}
      />
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
  listTopView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
});
