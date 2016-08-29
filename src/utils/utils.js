import _ from 'underscore';

export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
export const API = 'http://localhost:3001';

export const encryptQuote = quote => {
  function getCipherText(cipher, puzzle) {
    const answer = _.map(puzzle, x => {
      return _.has(cipher, x.toLowerCase()) ? (x === x.toLowerCase() ? cipher[x] : cipher[x.toLowerCase()].toUpperCase()) : x;
    });
    return answer.join('');
  }

  const shuffled = _.shuffle(ALPHABET);
  let cipher = _.object(_.map(ALPHABET, (letter, index)=> {
    return [letter, shuffled[index]];
  }));
  return getCipherText(cipher, quote);
};
