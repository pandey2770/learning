import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Two from './Two';
import Down from './Down';
import Cart from './Cart';
import Login from './Login';
import LoginPopup from './LoginPopup';
import SignUp from './SignUp';
import Profile from './Profile';
import Product from './Product';
import '../style.css';

class App extends Component {

  state = {
    buyLogin: null,
  };

  render() {
    return (
      <div style={{position: 'relative', height: '100%'}}>
        <Switch>
          <Route path="/two" component={Two} />
          <Route path="/down" component={Down} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route path="/product/:id" component={Product} />
          <Route path="/" component={Home} />
        </Switch>
        {!this.props.buyLogin ? (
            null
          ) : (
          <LoginPopup />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state,'state')
  return  {
    buyLogin:state.buyLogin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);