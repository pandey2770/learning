import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import { loginUser } from '../action';

class Login extends Component {
  
  state = {
    buyLogin: null,
    username: '',
    password: '',
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

  render() {
    const { username, password } = this.state;
    const { history, location } = this.props;
    return (
      <div>
        <Header history={history} location={location} />
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
        <Link to={`/SignUp`}>
          <button className="btn btn-primary">SignUp</button>
        </Link>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (username, password, history) =>
      dispatch(loginUser(username, password, history)),
  };
}

export default connect(undefined, mapDispatchToProps)(Login);
