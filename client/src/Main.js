import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  './Css.css';


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1 className="navbar-brand">DEMO</h1>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <ul className="style">
                <Link to={`/Home`}><li className="nav-item nav-link active">Home <span className="sr-only">(current)</span></li></Link>
                <Link to={`/Two`}><li className="nav-item nav-link" >Features</li></Link>
                <Link to={`/Three`}><li className="nav-item nav-link">Pricing</li></Link>
                <Link to={`/Cart`}><li className="nav-item nav-link disabled">Cart</li></Link>
                <Link to={`/Login`}><li className="nav-item nav-link">Login</li></Link>
                <Link to={`/SignUp`}><li className="nav-item nav-link">SignUp</li></Link>
              </ul>  
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;