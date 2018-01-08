import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Header extends Component {
  state = {
    user: undefined
  }

  componentWillMount() {
    const { data: user } =  axios.get('/api/currentuser');
    this.setState({
      user
    });
  }

  logout = () => {
    axios.get('/api/logout')
    .then(() => {
      this.props.history.push('/');
    })
  }

  render() {
    const { user } = this.state;
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
                {user ? <a onClick={this.logout}><li className="nav-item cursor nav-link">Logout</li></a>:
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

export default Header;