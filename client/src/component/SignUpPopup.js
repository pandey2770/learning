import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp, hideLogin, showLogin } from '../action';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: ''
  };

  change = event => {
    this.setState({
      [`${event.target.name}`]: event.target.value
    });
  };

  showLogin = () => {
    this.props.showLogin();
  }

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
    this.props.hideLogin();
  };

  render() {
    const { username, password, confirmPassword } = this.state;
    if (!this.props.showSignUp) {
        return null;
      }  
    return (
        <div className="modal">
        <input type="button" value="X" onClick={this.close} />
        <div className="modal-content">        
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
          <button
            onClick={this.signUp}
            className="btn btn-primary"
          > SignUp
          </button>
          <input type='button' value='login' onClick={this.showLogin} />
        </form>
      </div>
      </div>
    );
  }
}

function mapStateToprpos(state) {
  return {
    showSignUp: state.user.showSignUp
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: (username, password, history) =>
      dispatch(signUp(username, password, history)),
    hideLogin: state => dispatch(hideLogin(state)),
    showLogin: () => dispatch(showLogin()),
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(SignUp);
