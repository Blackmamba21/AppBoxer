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
import {addTodo, deleteTodo, updateTodo} from '../../redux/actions';
const TodoList = () => {
  const [todoItem, setTodoItem] = React.useState('');
  const [updateItemText, setUpdateItem] = React.useState('');
  const [editItemId, setEditItem] = React.useState(null);
  const todoList = useSelector((state) => state.todoReducer.todoList);
  const dispatch = useDispatch();

  const addItem = () => {
    let listItem = {id: todoList.length + 1, title: todoItem};
    dispatch(addTodo(listItem));
    setTodoItem('');
  };

  const deleteItem = (item) => {
    dispatch(deleteTodo(item));
  };

  const edit = (item) => {
    setEditItem(item.id);
  };

  const updateItem = () => {
    let listItem = {id: editItemId, title: updateItemText};
    dispatch(updateTodo(listItem));
    setEditItem(null);
  };

  const listSeparator = () => {
    return <View style={{height: 1, margin: 5, backgroundColor: 'grey'}} />;
  };

  const renderTodoList = (item, index) => {
    return (
      <View style={styles.listTopView}>
        <View style={{flex: 3}}>
          {editItemId && editItemId == item.id ? (
            <TextInput
              onChangeText={(text) => setUpdateItem(text)}
              placeholder={'Enter Text Here'}
              autoFocus={true}
              value={updateItemText}
            />
          ) : (
            <Text>{item.title}</Text>
          )}
        </View>
        <View style={styles.buttonView}>
          {editItemId && editItemId == item.id ? (
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => updateItem(item)}>
              <Text style={styles.text}>Update</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => edit(item)}>
              <Text style={styles.text}>Edit</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => deleteItem(item)}>
            <Icon name={'delete'} color="green" size={30} />
          </TouchableOpacity>
        </View>
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
  buttonStyle: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 5,
    minWidth: 60,
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  buttonView: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
