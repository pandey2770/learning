import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Features from './Features';
import Cart from './Cart';
import Profile from './Profile';
import LoginPopup from './LoginPopup';
import SignUpPopup from './SignUpPopup';
import Order from './Order';
import Product from './Product';
import '../style.css';
import { getAllProducts, getcartdetail, getAllOrder } from '../action';

class App extends Component {
  componentWillMount() {
    this.props.getAllOrder();
    this.props.getAllProducts();
    this.props.getcartdetail();
  }

  render() {
    return null;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    getcartdetail: () => dispatch(getcartdetail()),
    getAllOrder: () => dispatch(getAllOrder())
  };
}

const NewApp = connect(mapStateToProps, mapDispatchToProps)(App);

class Raper extends Component {
  render() {
    return (
      <div style={{ position: 'relative', height: '100%' }}>
        <NewApp />
        <Switch>
          <Route path="/features" component={Features} />
          <Route path="/cart" component={Cart} />
          <Route path="/profile" component={Profile} />
          <Route path="/product/:id" component={Product} />
          <Route path="/" component={Home} />
        </Switch>
        <LoginPopup />
        <SignUpPopup />
        <Order />
      </div>
    );
  }
}

export default Raper;
