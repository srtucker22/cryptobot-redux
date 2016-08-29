import {UPDATE_CRYPTOGRAM} from '../actions/cryptogram.actions';

const cryptogram = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CRYPTOGRAM:
      return action.cryptogram;
    default:
      return state;
  }
};

export default cryptogram;
