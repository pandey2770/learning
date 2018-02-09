import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { removeCart } from '../action';

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
      let y = cart[i].productid;
      x.push(y);
    }
    if (x) {
      const { productList } = this.props;
      if (productList) {
        for (i = 0; i < x.length; i++) {
          const productid = productList.find(p => p.id === x[i]);
          product.push(productid);
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
    if (cart !== 0) {
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
          if (product) {
            this.setState({ product: productImg });
          }
        }
      }
    }
  }

  removeCart = event => {
    const { id } = event.target.dataset;
    this.props.removeCart(id, 'state');
  };

  rate = event => {
    const { id } = event.target.dataset;
  };

  render() {
    const { history, location, cart } = this.props;
    const { product } = this.state;
    console.log(cart,product)
    return (
      <div>
        <Header history={history} location={location} />
        <h1>Cart</h1>
        {!cart.length
          ? <span>empty</span>
          : <div>
              {product.map((p, id) =>
                <div key={id} alt="Cart Product">
                  <div key={id}>
                    <img src={p.img} className="img-big" alt="Product" />
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="numberInput"
                      data-id={p.rate}
                      onChange={this.rate}
                    />
                    <button onClick={this.removeCart} data-id={p.id}>
                      Remove
                    </button>
                    <span>
                      Product Amount {p.rate}
                    </span>
                  </div>
                </div>
              )}
              <div>
                <span>Total Cart Amount</span>
                <button>Buy Now</button>
              </div>
            </div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    productList: state.product,
    cart: state.cart,
    user: state.user.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeCart: (id, state) => dispatch(removeCart(id, state))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
