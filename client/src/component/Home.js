import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getAllProducts,
  getProductCart,
  addToCartData,
  removeCart,
  getcartdetail
} from '../action';
import Header from './Header';

class Home extends Component {
  componentWillMount() {
    this.props.getAllProducts();
    this.props.getcartdetail();
  }

  addToCart = event => {
    const { id: userid } = this.props.user;
    const { id } = event.target.dataset;
    this.props.getProductCart(id, userid, 'add');
    this.props.addToCartData(id, userid, 'state');
  };

  removeCart = event => {
    const { id: userid } = this.props.user;
    const { id } = event.target.dataset;
    this.props.removeCart(id, userid);
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
    getAllProducts: () => dispatch(getAllProducts()),
    getProductCart: (id, state) => dispatch(getProductCart(id, state)),
    removeCart: (id, userid) => dispatch(removeCart(id, userid)),
    addToCartData: (id, userid, state) =>
      dispatch(addToCartData(id, userid, state)),
    getcartdetail: user => dispatch(getcartdetail(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
