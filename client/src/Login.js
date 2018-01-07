import React, { Component } from 'react';
import  './Css.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component{
  login = () => {
    axios.post('/api/login', {username: 'abhi', password: 'pwd'})
    .then(() => {
      console.log(this.props);
      this.props.history.push('/');
    })
  }
  
      render(){
        return(
            <div>
                <div className="form-group">
                  <lable for="exampleInputEmail1">Email Address</lable>
                  <input type="email" className="form-control"aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control"placeholder="Password"/>
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