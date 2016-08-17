import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {addTodo} from './actions/todos.actions';

export class App extends Component {
  addTodo() {
    this.props.dispatch(addTodo('cheese'));
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onTouchTap={this.addTodo.bind(this)}>Test</button>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
