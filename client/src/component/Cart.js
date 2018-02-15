import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { removeCart, confirm } from '../action';

class Cart extends Component {
  state = {
    product: undefined,
    rate: undefined,
    productImg: undefined,
    orderCart: []
  };

  componentWillMount() {
    const { cart } = this.props;
    const { productList } = this.props;
    let i;
    let x = [];
    let sum = [];
    let product = [];
    for (i = 0; i < cart.length; i++) {
      let y = cart[i].productid;
      x.push(y);
    }
    if (x) {
      if (productList) {
        for (i = 0; i < x.length; i++) {
          const productid = productList.find(p => p.id === x[i]);
          product.push(productid);
        }
        if (product) {
          this.setState({ product });
          for (i = 0; i < product.length; i++) {
            const rateId = product[i].rate;
            sum.push(+rateId);
            const reducer = (accumulator, currentValue) =>
              accumulator + currentValue;
            const rate = sum.reduce(reducer);
            this.setState({ rate });
          }
          return;
        }
      }
    }
  }

  componentWillReceiveProps(props) {
    const { order } = this.props;
    const { orderCart } = this.state;
    const { cart } = props;
    const { product } = this.state;
    const { productList } = props;
    let i;
    let a = [];
    let x = [];
    let orderImg = [];
    let productImg = [];
    for (i = 0; i < cart.length; i++) {
      let y = cart[i].productid;
      x.push(y);
    }
    if (x && product.length === 0) {
      for (i = 0; i < x.length; i++) {
        const cartid = productList.find(p => p.id === x[i]);
        productImg.push(cartid);
        if (productImg) {
          this.setState({ product: productImg, productImg });
        }
      }
    }
    if (order.length >= 0) {
      for (i = 0; i < order.length; i++) {
        let y = order[i].productid;
        a.push(y);
      }
      if (a) {
        for (i = 0; i < a.length; i++) {
          const orderId = productList.find(p => p.id === a[i]);
          orderImg.push(orderId);
          if (orderImg) {
            this.setState({ orderCart: orderImg });
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
    // const { id } = event.target.dataset;
  };

  confirm = () => {
    const { product } = this.state;
    this.props.confirm(product);
  };

  render() {
    const { history, location, cart, order } = this.props;
    const { orderCart, product, rate } = this.state;
    return (
      <div>
        <Header history={history} location={location} />
        <h1>Cart</h1>
        {orderCart.map((o, id) =>
          <div className="container" key={id}>
            <h2>Order Pending</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Status</th>
                  <th>Product</th>
                  <th>rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {o.name}
                  </td>
                  <td>Pending</td>
                  <td>
                    <img src={o.img} className="img" alt="Product" />
                  </td>
                  <td>
                    {o.rate}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {!cart.length
          ? <div>
              <span>empty</span>
            </div>
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
                <button onClick={this.confirm}>Buy Now</button>
                {rate}
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
    user: state.user.user,
    order: state.order
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeCart: id => dispatch(removeCart(id)),
    confirm: product => dispatch(confirm(product))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
