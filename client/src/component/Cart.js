import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';

class Cart extends Component {
  render() {
    const { history, location, cart, product } = this.props;
    return (
      <div>
        <Header history={history} location={location} />
        <h1>Cart</h1>
        {cart.map((p,id) => (
          <div key={id} alt='Cart Product'>
          </div>
        ))}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return  {
    product: state.product,
    cart:state.cart,
  };
}

export default connect(mapStateToProps, undefined)(Cart);
