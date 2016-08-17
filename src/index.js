import './index.css';
import { Provider } from 'react-redux';
import App from './components/app.component';
import DevTools from './components/dev-tools.component';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './stores/index.store';

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
