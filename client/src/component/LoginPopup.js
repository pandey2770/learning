import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, close, hideLogin } from '../action';

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

  close = () => {
    this.props.hideLogin();
  };

  render() {
    const { username, password } = this.state;
    if (!this.props.showLogin) {
      console.log('returning null')
      return null;
    }

    return (
      <div className="modal">
        <input type="button" value="X" onClick={this.close} />
        <div className="modal-content">
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
          <button onClick={this.login} className="btn btn-primary">
            Submit
          </button>/
          <Link to={`/SignUp`} onClick={this.close}>
            <button className="btn btn-primary">SignUp</button>
          </Link>
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
    hideLogin: state => dispatch(hideLogin(state))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);