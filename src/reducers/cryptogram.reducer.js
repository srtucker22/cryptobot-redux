import {UPDATE_CRYPTOGRAM} from '../actions/cryptogram.actions';

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state;
  }
};

const cryptogram = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CRYPTOGRAM:
      return action.cryptogram;
    default:
      return state;
  }
};

export default cryptogram;
