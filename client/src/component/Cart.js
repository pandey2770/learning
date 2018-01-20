import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getProduct, removeCart } from '../action';

class Cart extends Component {

  componentWillMount() {
    console.log(this.props.product.id)
    const { id } = this.props.cart;
    console.log(id,'id')
    if (id) {
      const { productList } = this.props;
      console.log(productList,'list')
      if (productList) {
        const product = productList.find(p => p.id === id);
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
    console.log(this.props.product)
    const { history, location, cart, product } = this.props;
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
  console.log(state)
  return  {
    product: state.product,
    user: state.user.user,
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
