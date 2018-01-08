import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import {login} from '../action';

class Login extends Component{

  state = {
    email:'',
    password: ''
  }

change = event=>{
    this.setState({
      [`${event.target.name}`]:event.target.value
    });
  }
  login = () => {
    const { username, password } = this.state;
    axios.post('/api/login', {username: '', password: ''})
    .then(() => {
    console.log(this.props);
    this.props.history.push('/');
    })
}


  render() {
    const { username, password } = this.state;
    return (
      <div>        
        <Header history={this.props.history}  location={this.props.location} />
         <div className="form-group">
          <lable for="exampleInputEmail1">Email Address</lable>
          <input type="email" value={username} name='username' onChange={this.change} className="form-control"aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" value={password} name='password' onChange={this.change} className="form-control"placeholder="Password"/>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input"/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button onClick={this.login} className="btn btn-primary">Submit</button>/
        <Link to={`/SignUp`}><button className="btn btn-primary">SignUp</button></Link>
    </div>
    );
  }
}


export default Login;