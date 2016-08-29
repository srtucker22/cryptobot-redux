import 'isomorphic-fetch';
import * as utils from '../utils/utils';
import * as io from 'socket.io-client';

let socket;

export const UPDATE_CRYPTOGRAM = 'UPDATE_CRYPTOGRAM';

export const updateCryptogram = (cryptogram)=> {
  return {
    type: UPDATE_CRYPTOGRAM,
    cryptogram
  };
};

export const getRandomQuote = ()=> {
  return (dispatch)=> {
    return fetch(`${utils.API}/files/random_quote`)
      .then(res => res.json())
      .then((body)=> {
        dispatch(updateCryptogram({
          puzzle: body.quote,
          progress: 0
        }));
      });
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
    socket = io.connect(utils.API);
  }

  return (dispatch)=> {
    socket.emit('decrypt', cryptogram);
    socket.on('data', (data) => {
      dispatch(updateCryptogram(data));
    });

    return dispatch(updateCryptogram(Object.assign({loading: true}, cryptogram)));
  };
};
