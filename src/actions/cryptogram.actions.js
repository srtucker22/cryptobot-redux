import 'isomorphic-fetch';
import * as utils from '../utils/utils';
import * as io from 'socket.io-client';

let socket;

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_CRYPTOGRAM = 'UPDATE_CRYPTOGRAM';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export const getRandomQuote = ()=> {
  return (dispatch)=> {
    return fetch('http://localhost:3001/random_quote')
      .then(res => res.json())
      .then((body)=> {
        dispatch(updateCryptogram({
          puzzle: body.quote,
          progress: 0
        }));
      });
  };
};

export const updateCryptogram = (cryptogram)=> {
  return {
    type: UPDATE_CRYPTOGRAM,
    cryptogram
  };
};

export const encrypt = (quote)=> {
  return {
    type: UPDATE_CRYPTOGRAM,
    cryptogram: {
      progress: 0,
      puzzle: utils.encryptQuote(quote)
    }
  };
};

export const decrypt = (cryptogram)=> {
  if (!socket) {
    socket = io.connect('http://localhost:3001/');
  }

  return (dispatch)=> {
    socket.emit('decrypt', cryptogram);
    socket.on('data', (data) => {
      dispatch(updateCryptogram(data));
    });
    return Promise.resolve();
  };
};
