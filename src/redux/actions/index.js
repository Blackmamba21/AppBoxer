import {ADD_TODO} from '../constants';

export const addTodo = (todoItem) => {
  return {
    type: ADD_TODO,
    item: todoItem,
  };
};
