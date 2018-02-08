import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getProduct, removeCart } from '../action';

class Cart extends Component {
  state = {
    product: undefined
  };

  componentWillMount() {
    const { cart } = this.props;
    let product = [];
    let i;
    let x = [];
    let y;
    for (i = 0; i < cart.length; i++) {
      y = cart[i].cartid;
      x.push(y);
    }
    if (x) {
      const { productList } = this.props;
      if (productList) {
        for (i = 0; i < x.length; i++) {
          const cartid = productList.find(p => p.id === x);
          product.push(cartid);
          console.log(product);
          if (product) {
            this.setState({ product });
            return;
          }
        }
      }
    }
  }

  componentWillReceiveProps(props) {
    const { cart } = props;
    let i;
    let x = [];
    let y;
    for (i = 0; i < cart.length; i++) {
      y = cart[i].cartid;
      x.push(y);
    }
    console.log(x);
    const { product } = this.state;
    const { productList } = props;
    if (x && !product && productList !== this.props.productList) {
      const product = productList.find(p => p.id === console.log(x), x);
      if (product) {
        this.setState({ product });
      }
    }
  }

  removeCart = event => {
    const { id } = event.target.dataset;
    this.props.removeCart(id);
  };

  rate = event => {
    const { id } = event.target.dataset;
  };

  render() {
    const { history, location, cart } = this.props;
    const { product } = this.state;
    console.log(product);
    return (
      <div>
        <Header history={history} location={location} />
        <h1>Cart</h1>
        {!cart.length
          ? <span>empty</span>
          : <div>
              {cart.map((c, id) =>
                <div key={id} alt="Cart Product">
                  <img
                    src={product && product.img}
                    className="img-big"
                    alt="Product"
                  />
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="numberInput"
                    data-id={c.rate}
                    onChange={this.rate}
                  />
                  <button onClick={this.removeCart} data-id={c.productid}>
                    Remove
                  </button>
                  <span>
                    {' '}Product Amount {c.rate}
                  </span>
                </div>
              )}
              <div>
                <span>Total Cart Amount </span>
                <button>Buy Now</button>
              </div>
            </div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    productList: state.product,
    cart: state.cart,
    user: state.user.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProduct: cart => dispatch(getProduct(cart)),
    removeCart: id => dispatch(removeCart(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
