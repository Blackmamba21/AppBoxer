import {ADD_TODO, DELETE_TODO, VIEW_TODO} from '../constants';

const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  console.log('action', action);
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

    default:
      return state;
  }
};
export default todoReducer;
