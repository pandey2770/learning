import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getProduct, removeCart } from '../action';

class Cart extends Component {


  state = {
  };

  removeCart = (event) => {
    const {id} = event.target.dataset;
    console.log(id)
    this.props.removeCart(id);
  }

  render() {
    const { history, location, cart } = this.props;
    return (
      <div>
        <Header history={history} location={location} />
        <h1>Cart</h1>
        {cart.map((p,id) => (
          <div key={id} alt='Cart Product'>
            <img src={cart.img} className="img-big" alt="Product" />
            <button onClick={this.removeCart} data-id={p.id} >Remove</button>
          </div>
        ))}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return  {
    productList: state.product,
    cart:state.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProduct: (cart) => dispatch(getProduct(cart)),
    removeCart: id => dispatch(removeCart(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
