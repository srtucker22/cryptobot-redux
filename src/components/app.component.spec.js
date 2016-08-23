import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import {App} from './app.component';
import {LoadingDialog} from './loading-dialog.component';
import {spyOnComponentMethod} from 'sinon-spy-react';
import * as Actions from '../actions/cryptogram.actions';

describe('Component: App', function() {
  function setup(newProps, shouldMount) {
    const props = Object.assign({}, newProps, {
      dispatch: function() {}
    });

    const component = <App {...props} />;
    const wrapper = !!shouldMount ? mount(component) : shallow(component);

    return {
      component,
      wrapper
    };
  }

  describe('when we have a cryptogram', ()=> {
    it('should render the dashboard', ()=> {
      const props = {cryptogram: {puzzle: 'cheese', progress: 0}};
      const {component, wrapper} = setup(props, true);
      expect(wrapper.find('.wrapper')).to.have.length(1);
    });

    describe('when we are loading cryptogram data', ()=> {
      const props = {loading: true, cryptogram: {puzzle: 'cheese', progress: 0}};
      const {component, wrapper} = setup(props, true);

      it('should render a loading dialog', ()=> {
        expect(wrapper.find(LoadingDialog)).to.have.length(1);
      });

      it('should render non-clickable buttons', ()=> {
        let buttons = wrapper.find('.button-container button[disabled=true]');
        expect(buttons).to.have.length(3);
      });
    });

    describe('when we are not loading cryptogram data', ()=> {
      const props = {cryptogram: {puzzle: 'cheese', progress: 0}};
      const {component, wrapper} = setup(props, true);

      it('should not render a loading dialog', ()=> {
        expect(wrapper.find(LoadingDialog)).to.have.length(0);
      });

      it('should render clickable buttons', ()=> {
        let buttons = wrapper.find('button');
        expect(buttons).to.have.length(3);
        buttons = wrapper.find('.button-container button[disabled=true]');
        expect(buttons).to.have.length(0);
      });

      describe('when we click a button', ()=> {
        let sandbox = sinon.sandbox.create();

        function buttonTester(title, func) {
          let spy = sandbox.spy(Actions, func);
          let button = wrapper.find('.button-container button').filterWhere(n => n.text() == title);
          expect(button).to.have.length(1);
          button.simulate('click');
          expect(spy).to.have.property('callCount', 1);
        }

        it('should request a random quote', ()=> {
          buttonTester('Random quote', 'getRandomQuote');
        });
        it('should request to encrypt text', ()=> {
          buttonTester('Encrypt', 'encrypt');
        });
        it('should request to decrypt text', ()=> {
          buttonTester('Decrypt', 'decrypt');
        });

        sandbox.restore();
      });
    });
  });

  describe(`when we don't have a cryptogram`, ()=> {
    let sandbox = sinon.sandbox.create();

    let spy = sandbox.spy(Actions, 'getRandomQuote');
    const {component, wrapper} = setup({}, true);

    it('should render loading page', ()=> {
      expect(wrapper.find('.preloader')).to.have.length(1);
    });

    it('should request a random quote', ()=> {
      expect(spy).to.have.property('callCount', 1);
    });

    sandbox.restore();
  });
});
