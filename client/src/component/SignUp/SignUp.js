import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import { connect } from 'react-redux';
import { signup } from '../action';

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
    return this.props.signup(history, username, password);
  };

  render() {
    const { username, password, confirmPassword } = this.state;
    return (
      <div>
        <Header history={this.props.history} location={this.props.location} />
        <form>
          <div className="form-group">
            <lable for="exampleInputEmail1">Email Address</lable>
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
            <label for="exampleInputPassword1">Password</label>
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
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.change}
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>
          <input
            type="button"
            value="SignUp"
            onClick={this.signUp}
            className="btn btn-primary"
          />/
          <Link to={`/Login`}>
            <button className="btn btn-primary">Login</button>
          </Link>
        </form>
      </div>
    );
  }
}

function mapStateToprpos(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    signup: history => dispatch(signup(history))
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(SignUp);
