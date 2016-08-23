import _ from 'underscore';
import * as utils from './utils';
import {expect} from 'chai';

// get the indecies of a character within a string
function getIndicies(str, char) {
  let a = [];
  let i = str.indexOf(char);
  while (i >= 0) {
    a.push(i);
    i = str.indexOf(char, i + 1);
  };
  return a;
}

describe('Utils', () => {
  describe('when calling encryptQuote', ()=> {
    it('should return an encrypted version of the quote', () => {
      const quote = 'the quick brown fox jumps over the lazy dog!';
      const encrypted = utils.encryptQuote(quote);
      expect(encrypted).to.not.eql(quote);
      _.map(quote, (char, index)=> {
        expect(getIndicies(quote, char)).to.eql(getIndicies(encrypted, encrypted[index]));
      });
    });
  });
});
