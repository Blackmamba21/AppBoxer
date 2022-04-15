import {ADD_TODO, DELETE_TODO, UPDATE_TODO, VIEW_TODO} from '../constants';

const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let addItem = action.item;
      let addList = state.todoList;
      addList.unshift(addItem);
      return {
        ...state,
        todoList: addList,
      };
    case VIEW_TODO:
      let viewItem = action.item;
      return {
        ...state,
        todoList: viewItem,
      };

    case DELETE_TODO:
      let deleteItem = action.item.id;
      let list = state.todoList.filter((item) => item.id != deleteItem);
      return {
        ...state,
        todoList: list,
      };

    case UPDATE_TODO:
      let updateItem = action.item;
      let index = state.todoList.findIndex(
        (object) => object.id == updateItem.id,
      );
      let updateList = state.todoList;
      if (index != -1) {
        updateList[index] = updateItem;
      }

      return {
        ...state,
        todoList: updateList,
      };

    default:
      return state;
  }
};
export default todoReducer;
