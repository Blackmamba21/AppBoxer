import {ADD_TODO} from '../constants';

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

    default:
      return state;
  }
};
export default todoReducer;
