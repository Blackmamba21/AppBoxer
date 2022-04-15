import {ADD_TODO, DELETE_TODO, VIEW_TODO} from '../constants';

export const addTodo = (todoItem) => {
  return {
    type: ADD_TODO,
    item: todoItem,
  };
};

export const viewTodo = () => {
  return {
    type: VIEW_TODO,
  };
};

export const deleteTodo = (todoItem) => {
  return {
    type: DELETE_TODO,
    item: todoItem,
  };
};
