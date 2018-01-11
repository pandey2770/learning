import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header';
import { loginUser } from '../../action';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  change = event => {
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
    return (
      <div>
        <Header history={this.props.history} location={this.props.location} />
        <div className="form-group">
          <lable for="exampleInputEmail1">Email Address</lable>
          <input
            type="email"
            value={username}
            name="username"
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
            value={password}
            name="password"
            onChange={this.change}
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

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (username, password, history) =>
      dispatch(loginUser(username, password, history))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
