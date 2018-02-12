import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp, hide, showLogin } from '../action';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: ''
  };

  componentDidMount() {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 27) this.props.hide();
    });
  }

  change = event => {
    this.setState({
      [`${event.target.name}`]: event.target.value
    });
  };

  showLogin = () => {
    this.props.showLogin();
  };

  signUp = () => {
    const { username, password, confirmPassword } = this.state;
    const { history } = this.props;
    if (username === '') {
      alert('Please enter the right Email.');
      return false;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }
    return this.props.signUp(history, username, password);
  };

  close = () => {
    this.props.hide();
  };

  render() {
    const { username, password, confirmPassword } = this.state;
    if (!this.props.popUp) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-content">
          <input
            type="button"
            value="X"
            onClick={this.close}
            className="closeButton"
          />
          <h2 className="center-center">SignUp</h2>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email Address</label>
              <input
                type="email"
                name="username"
                value={username}
                onChange={this.change}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                onChange={this.change}
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.change}
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>
            <div className="button-style">
              <input
                type="button"
                value="SignUp"
                onClick={this.signUp}
                className="btn button btn-primary"
              />
            </div>
            <div className="button-style">
              <input
                type="button"
                value="login"
                onClick={this.showLogin}
                className="btn button btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToprpos(state) {
  return {
    popUp: state.popUp.showSignUp
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: (username, password, history) =>
      dispatch(signUp(username, password, history)),
    hide: state => dispatch(hide(state)),
    showLogin: () => dispatch(showLogin())
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(SignUp);
