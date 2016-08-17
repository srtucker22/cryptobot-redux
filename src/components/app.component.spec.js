import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import {App} from './app.component';

describe('<App/>', function() {
  it('should render the app', function() {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.App')).to.have.length(1);
    expect(wrapper.find('.App-header')).to.have.length(1);
  });
});
