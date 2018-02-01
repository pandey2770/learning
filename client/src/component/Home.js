import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getAllProducts,
  addToCartData,
  removeCart
} from '../action';
import Header from './Header';

class Home extends Component {


  addToCart = event => {
    const { id:cartid } = event.target.dataset;
    this.props.addToCartData(cartid, 'state');
  };

  removeCart = event => {
    const { id: userid } = this.props.user;
    const { id } = event.target.dataset;
    this.props.removeCart(id, userid);
  };

  render() {
    const { product, history, location, cart } = this.props;
    console.log(cart,'carthome')
    return (
      <div>
        <div>
          <Header history={history} location={location} />
        </div>
        <div>
          {product.map((p, id) =>
            <div key={id} className="img" alt="Product">
              <Link to={`/product/${p.id}`}>
                <img src={p.img} data-id={p.id} className="img" alt="Product" />
              </Link>
              {cart.filter(c => c.id === p.id).length > 0
                ? <button data-id={p.id} onClick={this.removeCart}>
                    remove from cart
                  </button>
                : <button data-id={p.id} onClick={this.addToCart}>
                    Add to Cart
                  </button>}
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    product: state.product,
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeCart: (id, userid) => dispatch(removeCart(id, userid)),
    addToCartData: (cartid, state) => dispatch(addToCartData(cartid, state)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
