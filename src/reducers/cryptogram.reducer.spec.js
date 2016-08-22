import {expect} from 'chai';
import reducer from './cryptogram.reducer';
import * as types from '../actions/cryptogram.actions';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.eql([]);
  });

  it('should handle ADD_TODO', () => {
    expect(
      reducer([], {
        type: types.ADD_TODO,
        text: 'Run the tests',
        id: 0
      })
    ).to.eql(
      [
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }
      ]
    );

    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: types.ADD_TODO,
          text: 'Run the tests',
          id: 1
        }
      )
    ).to.eql(
      [
        {
          text: 'Use Redux',
          completed: false,
          id: 0
        },
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        },
      ]
    );
  });
});
