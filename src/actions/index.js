
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
    date: Date.now(),
    isComplete: false
  }
}

export const removeTodo = (text) => {
  return {
    type: REMOVE_TODO,
    text,
    isComplete: true
  }
}

