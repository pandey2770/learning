import React, { Component } from 'react';
import  './Css.css';
import { Link } from 'react-router-dom';




class SignUp extends Component{
    render(){
        return(
            <div>
              <form>
                <div className="form-group">
                  <lable for="exampleInputEmail1">Email Address</lable>
                  <input type="email" className="form-control"aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control"placeholder="Password"/>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Confirm Password</label>
                  <input type="password" className="form-control"placeholder="Confirm Password"/>
                </div>                
                <div className="form-check">
                  <input type="checkbox" className="form-check-input"/>
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>/
                <Link to={`/Login`}><button className="btn btn-primary">Login</button></Link>
              </form>
            </div>
        );
    }
}


export default SignUp;