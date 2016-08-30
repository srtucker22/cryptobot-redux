import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './stores/store';
import Root from './components/root.component';

injectTapEventPlugin();

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
