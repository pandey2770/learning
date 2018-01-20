import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Features from './Features';
import Cart from './Cart';
import Profile from './Profile';
import LoginPopup from './LoginPopup';
import SignUpPopup from './SignUpPopup';
import Product from './Product';
import '../style.css';

class App extends Component {
  render() {
    return (
      <div style={{ position: 'relative', height: '100%' }}>
        <Switch>
          <Route path="/features" component={Features} />
          <Route path="/cart" component={Cart} />
          <Route path="/profile" component={Profile} />
          <Route path="/product/:id" component={Product} />
          <Route path="/" component={Home} />
        </Switch>
        <LoginPopup />
        <SignUpPopup />
      </div>
    );
  }
}

export default App;
