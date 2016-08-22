import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import {App} from './app.component';
import {spyOnComponentMethod} from 'sinon-spy-react';
import * as actions from '../actions/todos.actions';

describe('<App/>', function() {
  function setup() {
    const props = {
      dispatch: function() {
      }
    };

    const component = <App {...props} />;
    const wrapper = shallow(component);
    let spy = sinon.spy(actions, 'addTodo');

    return {
      component,
      wrapper,
      spy
    };
  }

  it('should render the app', function() {
    const {component, wrapper, spy} = setup();
    expect(wrapper.find('.App')).to.have.length(1);
    expect(wrapper.find('.App-header')).to.have.length(1);
    wrapper.find('button').simulate('click');
    expect(spy).to.have.property('callCount', 1);
  });
});
