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
    let i;
    let x = [];
    let product = [];
    for (i = 0; i < cart.length; i++) {
      let y = cart[i].cartid;
      x.push(y);
    }
    if (x) {
      const { productList } = this.props;
      if (productList) {
        for (i = 0; i < x.length; i++) {
          const cartid = productList.find(p => p.id == x[i]);
          product.push(cartid);
        }
        if (product) {
          this.setState({ product });
          return;
        }
      }
    }
  }

  componentWillReceiveProps(props) {
    const { cart } = props;
    if (cart != 0) {
      const { product } = this.state;
      const { productList } = props;
      let productImg = [];
      let i;
      let x = [];
      for (i = 0; i < cart.length; i++) {
        let y = cart[i].productid;
        x.push(y);
      }
      if (x && product.length === 0) {
        for (i = 0; i < x.length; i++) {
          const cartid = productList.find(p => p.id === x[i]);
          productImg.push(cartid);
          console.log(productImg);
          if (product) {
            this.setState({ product: productImg });
          }
        }
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
    const { history, location, cart, productList } = this.props;
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
                  {product.map((p, id) =>
                    <img
                      src={p.img}
                      key={id}
                      className="img-big"
                      alt="Product"
                    />
                  )}
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
