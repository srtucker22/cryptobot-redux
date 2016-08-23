import React from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import './app.component.css';
import * as Actions from '../actions/cryptogram.actions';
import {About} from './about.component';
import {LoadingDialog} from './loading-dialog.component';

export class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      info: false
    };
  }

  componentDidMount() {
    console.log('componentDidMount', this.props.cryptogram);
    if (!this.props.cryptogram) {
      this.props.dispatch(Actions.getRandomQuote());
    }
  }

  close() {
    this.setState({
      info: false
    });
  }

  decrypt() {
    this.props.dispatch(Actions.decrypt());
  }

  encrypt() {
    this.props.dispatch(Actions.encrypt());
  }

  getRandomQuote() {
    this.props.dispatch(Actions.getRandomQuote());
  }

  toggleInfo() {
    this.setState({
      info: !this.state.info
    });
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
        <div className='button-container'>
          <button
            disabled={this.props.loading}
            onClick={this.getRandomQuote.bind(this)}
            onTouchTap={this.getRandomQuote.bind(this)}>
            Random quote
          </button>
          <button
            disabled={this.props.loading}
            onClick={this.encrypt.bind(this)}
            onTouchTap={this.encrypt.bind(this)}>
            Encrypt
          </button>
          <button
            disabled={this.props.loading}
            onClick={this.decrypt.bind(this)}
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
        {this.state.info ? <About close={this.close.bind(this)}/> : ''}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    cryptogram: state.cryptogram
  };
};

App.propTypes = {
  cryptogram: React.PropTypes.object,
  dispatch: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
};

export default connect(mapStateToProps)(App);
