import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCartData, removeCart } from '../action';
import Header from './Header';

class Home extends Component {
  addToCart = event => {
    const { id: cartid } = event.target.dataset;
    this.props.addToCartData(cartid, 'addCart');
  };

  removeCart = event => {
    const { id } = event.target.dataset;
    this.props.removeCart(id);
  };

  render() {
    const { product, history, location, cart } = this.props;
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
              {cart.filter(c => c.id === p.id).length < 0
                ? <button data-id={p.id} onClick={this.removeCart}>
                    remove from cart
                  </button>
                : <button data-id={p.id} onClick={this.addToCart}>
                    addToCart
                    {/* <svg className="heart" viewBox="0 0 32 29.6" >
                      <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                    </svg>  */}
                  </button>}
              <span>
                $ {p.rate}
              </span>
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
    removeCart: id => dispatch(removeCart(id)),
    addToCartData: (cartid, state) => dispatch(addToCartData(cartid, state))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
