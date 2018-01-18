import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllProducts, showLogin } from '../action';


class Button extends Component {

  componentWillMount() {
    this.props.getAllProducts()
  }
  
  showLogin = (event) => {
    this.props.showLogin();
  }

  render() {
    const { product } = this.props;
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
                 <button data-id={p.id} onClick={this.showLogin}>buy</button>
                 <button data-id={p.id} onClick={this.Cart}>Cart</button>
            </div>
          })} 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return  {
    product: state.product,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    showLogin: () => dispatch(showLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);