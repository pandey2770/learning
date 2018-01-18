import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { browserHistory } from 'react-router'
import Home from './Home';
import Two from './Two';
import Down from './Down';
import Cart from './Cart';
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';
import LoginPopup from './LoginPopup';
import Product from './Product';
import '../style.css';

class App extends Component {
  render() {
    return (
      <div style={{ position: 'relative', height: '100%' }}>
        <Router history={browserHistory} >
          <Route path="/two" component={Two} />
          <Route path="/down" component={Down} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route path="/product/:id" component={Product} />
          <Route path="/" component={Home} />
        </Router>
        <LoginPopup />
      </div>
    );
  }
}

export default App;
