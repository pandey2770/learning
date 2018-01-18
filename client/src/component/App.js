import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Features from './Features';
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
        <Switch>
          <Route path="/features" component={Features} />
          <Route path="/cart" component={Cart} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route path="/product/:id" component={Product} />
          <Route path="/" component={Home} />
        </Switch>
        <LoginPopup />
      </div>
    );
  }
}

export default App;
