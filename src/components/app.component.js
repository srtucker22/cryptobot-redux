import React from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import './app.component.css';
import * as Actions from '../actions/cryptogram.actions';
import {About} from './about.component';
import {LoadingDialog} from './loading-dialog.component';

export class App extends React.Component {
  close() {

  }

  decrypt() {

  }

  encrypt() {

  }

  getRandomQuote() {
    this.props.dispatch(Actions.getRandomQuote());
  }

  toggleInfo() {

  }

  render() {
    if (!this.props.cryptogram) {
      return <div className='preloader'><div>Loading...</div></div>;
    }

    return (
      <div className='wrapper'>
        <textarea name='name'>
          {this.props.cryptogram.puzzle}
        </textarea>
        <div classNameName='button-container'>
          <button
            disabled={this.props.loading} onTouchTap={this.getRandomQuote.bind(this)}>
            Random quote
          </button>
          <button
            disabled={this.props.loading}
            onTouchTap={this.encrypt.bind(this)}>
            Encrypt
          </button>
          <button
            disabled={this.props.loading}
            onTouchTap={this.decrypt.bind(this)}>
            Decrypt
          </button>
        </div>
        {this.props.loading ?
          <LoadingDialog
            progress={this.props.cryptogram.progress}
          /> : ''}
        <div className='info' onTouchTap={this.toggleInfo.bind(this)}>
          <div>
            i
          </div>
        </div>
        {this.props.info ? <About close={this.close.bind(this)}/> : ''}
      </div>
    );
  }
};

App.propTypes = {
  cryptogram: React.PropTypes.object,
  dispatch: React.PropTypes.func.isRequired,
  info: React.PropTypes.bool,
  loading: React.PropTypes.bool,
};

export default connect()(App);
