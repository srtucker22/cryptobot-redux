import {expect} from 'chai';
import * as actions from './todos.actions';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: actions.ADD_TODO,
      text
    };
    expect(actions.addTodo(text)).to.eql(Object.assign(expectedAction, {id: 0}));
  });
});
