import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts, addToCart } from '../action';

class ProductList extends Component {
  componentWillMount() {
    this.props.getAllProducts();
  }

  addToCart = event => {
    const { id } = event.target.dataset;
    this.props.addToCart(id, 'state');
  };

  render() {
    const { product, cart } = this.props;
    return (
      <div>
        {product.map((p, id) => {
          return (
            <div key={id} className="img" alt="Product">
              <Link to={`/product/${p.id}`}>
                <img
                  src={p.img}
                  data-id={p.id}
                  key={id}
                  className="img"
                  alt="Product"
                />
              </Link>
              <button data-id={p.id} onClick={this.addToCart}>
                buy
              </button>
              <button data-id={p.id} onClick={this.addToCart}>
                CartU
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.product,
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    addToCart: (state, id) => dispatch(addToCart(state, id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
