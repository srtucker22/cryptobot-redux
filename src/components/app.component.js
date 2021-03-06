import React from 'react';
import {connect} from 'react-redux';
import './app.component.css';
import * as Actions from '../actions/cryptogram.actions';
import {About} from './about.component';
import {LoadingDialog} from './loading-dialog.component';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: false,
      cryptogram: props.cryptogram || {puzzle: '', progress: 0}
    };
  }

  componentDidMount() {
    if (!this.props.cryptogram ||
      !Object.keys(this.props.cryptogram).length) {
      this.props.dispatch(Actions.getRandomQuote());
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.cryptogram && !!nextProps.cryptogram.puzzle) {
      this.setState({
        cryptogram: nextProps.cryptogram
      });
    }
  }

  close() {
    this.setState({
      info: false
    });
  }

  decrypt() {
    if (this.state.cryptogram.puzzle.length) {
      this.props.dispatch(Actions.decrypt(this.state.cryptogram));
    }
  }

  encrypt() {
    this.props.dispatch(Actions.encrypt(this.state.cryptogram.puzzle));
  }

  getRandomQuote() {
    this.props.dispatch(Actions.getRandomQuote());
  }

  handleChange(e) {
    this.setState({cryptogram: {
      puzzle: e.target.value,
      progress: 0
    }});
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

    const loading = this.state.cryptogram.loading;

    return (
      <div className='wrapper'>
        {this.state.cryptogram ? <textarea
          spellCheck='false'
          name='name'
          value={this.state.cryptogram.puzzle}
          onChange={!loading && this.handleChange.bind(this)}/> : ''}
        <div className='button-container'>
          <button
            disabled={loading}
            onTouchTap={!loading && this.getRandomQuote.bind(this)}>
            Random quote
          </button>
          <button
            disabled={loading}
            onTouchTap={!loading && this.encrypt.bind(this)}>
            Encrypt
          </button>
          <button
            disabled={loading}
            onTouchTap={!loading && this.decrypt.bind(this)}>
            Decrypt
          </button>
        </div>
        {!!loading ?
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
    cryptogram: state.cryptogram,
  };
};

App.propTypes = {
  cryptogram: React.PropTypes.object,
  dispatch: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps)(App);
