import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  './Css.css';


class App extends Component {
  state = {
    user: undefined
  }

  async componentWillMount() {
    const { data: user } = await axios.get('/api/currentuser');
    this.setState({
      user
    });
  }

  render() {
    const { user } = this.state;
    console.log('********', user)
    return (
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <h1 className="navbar-brand">DEMO</h1>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <ul className="style">
                <Link to={`/Home`}><li className="nav-item nav-link active">Home <span className="sr-only">(current)</span></li></Link>
                <Link to={`/Two`}><li className="nav-item nav-link" >Features</li></Link>
                <Link to={`/Three`}><li className="nav-item nav-link">Pricing</li></Link>
                {user ? <Link to={`/Logout`}><li className="nav-item nav-link">Logout</li></Link>:
                  <Link to={`/Login`}><li className="nav-item nav-link">Login</li></Link>}
                <Link to={`/Cart`}><li className="nav-item nav-link">Cart</li></Link>
              </ul>  
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;