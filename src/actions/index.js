
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    info: {
      text,
      date: Date.now(),
      isComplete: false
    }
  }
}

/*export const removeTodo = (text) => {
  return {
    type: REMOVE_TODO,
    info: {
      isComplete: true
    }
  }
}*/

