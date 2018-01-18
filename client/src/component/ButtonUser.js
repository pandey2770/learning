import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts, buyLogin, cartUser } from '../action';


class ButtonUser extends Component {
  
  componentWillMount() {
    this.props.getAllProducts()
  }

  buyLogin = (event) => {
    const { id } = event.target.dataset;
    this.props.buyLogin(id);
    this.props.cartUser(id,'state');
  }

  cartUser = (event) => {
    const {id} = event.target.dataset;
    this.props.cartUser(id,'state');
  }

  render() {
    const { product,cart } = this.props;
    return (
      <div>
        {product.map((p, id) => {
            return <div
              key={id}
              className='img'
              alt="Product"
            ><Link to={`/product/${p.id}`} >
             <img 
                src={p.img}
                data-id={p.id}
                key={id}
                className='img'
                alt="Product" /></Link>
                <Link to={`/features/${p.id}`} > <button data-id={p.id} onClick={this.buyLogin}>buy</button></Link>
                {!cart ? (
                    <button 
                    data-id={p.id} 
                    onClick={this.cartUser}
                    >
                    CartU
                    </button>
                ):( 
                    <button>
                        d
                    </button>
                )} 
            </div>
          })} 
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
    getAllProducts: () => dispatch(getAllProducts()),
    buyLogin:(id) => dispatch(buyLogin(id)),
    cartUser:(state,id) => dispatch(cartUser(state,id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonUser);