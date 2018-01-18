import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';

class Cart extends Component {
  render() {
    console.log(this.props.product)
    const { history, location, cart, product } = this.props;
    return (
      <div>
        <Header history={history} location={location} />
        <h1>Cart</h1>
          {
            cart.map((p,id) => {
              return <div kye={id} alt='Cart Produst' >
              {/* <img src={} className="img" /> */}
              </div>
            })
          }
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log(state)
  return  {
    product: state.product,
    cart:state.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
