import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, hideLogin, showSignUp } from '../action';

class LoginPopup extends Component {
  state = {
    buyLogin: null,
    username: '',
    password: ''
  };

  updateInput = event => {
    this.setState({
      [`${event.target.name}`]: event.target.value
    });
  };

  login = () => {
    const { loginUser, history } = this.props;
    const { username, password } = this.state;
    loginUser(username, password, history);
  };

  showSignUp  = () => {
    this.props.showSignUp();
  }

  close = () => {
    this.props.hideLogin();
  };

  render() {
    const { username, password } = this.state;
    if (!this.props.showLogin) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-content">
        <input type="button" value="X" onClick={this.close} className='closeButton' />
          <h2 className='center'>Login</h2>
          <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input
              type="email"
              value={username}
              name="username"
              onChange={this.updateInput}
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              value={password}
              name="password"
              onChange={this.updateInput}
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className='button-style'>
            <input type='button' value='Login' onClick={this.login} className="btn button btn-primary" />
            <input type='button' value='signUp' onClick={this.showSignUp} className="btn button btn-primary" />
          </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showLogin: state.user.showLogin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (username, password, history) =>
      dispatch(loginUser(username, password, history)),
    hideLogin: state => dispatch(hideLogin(state)),
    showSignUp: () => dispatch(showSignUp()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);
