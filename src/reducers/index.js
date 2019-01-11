import { ADD_TODO, REMOVE_TODO } from '../actions/index';

const initialState = {
  items: [],
  filter: 'NOT_COMPLETED'
};

// text
// date
// completed

export default (state = initialState, action) => {
  const newState = {...state};
  switch(action.type) {
    case ADD_TODO:
      newState.items.push(action.info);
      return newState;
    default:
      return state; 
  }
}