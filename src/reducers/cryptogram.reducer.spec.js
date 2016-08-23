import {expect} from 'chai';
import reducer from './cryptogram.reducer';
import * as types from '../actions/cryptogram.actions';

describe('Reducer: Cryptogram', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.eql({});
  });

  it('should handle UPDATE_CRYPTOGRAM', () => {
    let cryptogram = {
      puzzle: 'cheese',
      progress: 0
    };

    expect(
      reducer(undefined, {
        type: types.UPDATE_CRYPTOGRAM,
        cryptogram
      })
    ).to.eql(cryptogram);
  });
});
