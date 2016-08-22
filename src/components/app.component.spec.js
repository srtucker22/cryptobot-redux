import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import {App} from './app.component';
import {spyOnComponentMethod} from 'sinon-spy-react';
import * as actions from '../actions/cryptogram.actions';

describe('<App/>', function() {
  let spy = sinon.spy(actions, 'addTodo');

  function setup({cryptogram}) {
    const props = {
      dispatch: function() {},
      cryptogram
    };

    const component = <App {...props} />;
    const wrapper = shallow(component);

    return {
      component,
      wrapper,
      spy
    };
  }

  describe('when we have a cryptogram', ()=> {
    it('should render the dashboard', ()=> {
      const props = {cryptogram: {puzzle: 'cheese', progress: 0}};
      const {component, wrapper, spy} = setup(props);
      expect(wrapper.find('.wrapper')).to.have.length(1);
    });
  });

  describe(`when we don't have a cryptogram`, ()=> {
    it('should render loading page', ()=> {
      const {component, wrapper, spy} = setup({});
      expect(wrapper.find('.preloader')).to.have.length(1);
    });
  });

  // it('should render the app', function() {
  //   expect(wrapper.find('.App')).to.have.length(1);
  //   expect(wrapper.find('.App-header')).to.have.length(1);
  //   wrapper.find('button').simulate('click');
  //   expect(spy).to.have.property('callCount', 1);
  // });
});
