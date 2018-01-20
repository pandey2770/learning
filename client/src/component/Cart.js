import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getProduct, removeCart } from '../action';

class Cart extends Component {


  state = {
    product: undefined
  };

  componentWillMount() {
    console.log(this.props.product)
    const { id } = this.props.cart;
    console.log(id,'id')
    if (id) {
      const { product } = this.props;
      console.log(product,'list')
      if (product) {
        const product = product.find(p => p.id === id);
        if (product) {
          this.setState({ product });
          return;
        }
      }
      this.props.getProduct(id);
    }
  }


  removeCart = (event) => {
    const {id} = event.target.dataset;
    this.props.removeCart(id);
  }

  render() {
    const { history, location, cart } = this.props;
    const { product } = this.state;
    return (
      <div>
        <Header history={history} location={location} />
        <h1>Cart</h1>
        {cart.map((p,id) => (
          <div key={id} alt='Cart Product'>
            <img src={product && product.img} className="img-big" alt="Product" />
            <button onClick={this.removeCart} data-id={p} >Remove</button>
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

function mapDispatchToProps(dispatch) {
  return {
    getProduct: id => dispatch(getProduct(id)),
    removeCart: id => dispatch(removeCart(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
