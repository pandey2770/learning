import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {

state ={
  email :'',
  password :'',
  confirmPassword :''
}

change =(event) =>{
  this.setState({
    [`${event.target.name}`]: event.target.value
  });
}
  
signUp = () => {
  const { email, password, confirmPassword } =this.state;

}

  render() {
    const { email, password, confirmPassword } =this.state;
    return (
      <div>
        <form>
          <div className="form-group">
            <lable for="exampleInputEmail1">Email Address</lable>
            <input
              type="email"
              name="email"
              value={email}
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
              name='password'
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
              name='confirmPassword'
              value={confirmPassword}
              onChange={this.change}
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button  onClick={this.signUp} type="submit" className="btn btn-primary">
            Submit
          </button>/
          <Link to={`/Login`}>
            <button className="btn btn-primary">Login</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default SignUp;
