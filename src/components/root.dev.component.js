import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './app.component';
import DevTools from './dev-tools.component';

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <div>
          <DevTools />
          <App />
        </div>
      </Provider>
    );
  }
}
