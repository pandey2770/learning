import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Features from './Features';
import Cart from './Cart';
import Profile from './Profile';
import LoginPopup from './LoginPopup';
import SignUpPopup from './SignUpPopup';
import Product from './Product';
import '../style.css';
import { getAllProducts, getcartdetail } from '../action';

class App extends Component {

  componentWillMount() {
    this.props.getAllProducts();
    this.props.getcartdetail();    
  }

  render() {
    return null
  }
}

function mapStateToProps(state) {
  return {
  };
}


function mapDispatchToProps(dispatch) {
return {
  getAllProducts: () => dispatch(getAllProducts()),
  getcartdetail: () => dispatch(getcartdetail())      
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
        </div>
      );
    }
  }
  
export default Raper;


