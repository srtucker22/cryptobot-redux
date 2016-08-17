import { Provider } from 'react-redux';
import store from './stores/index.store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import DevTools from './components/dev-tools.component';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <DevTools />
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
