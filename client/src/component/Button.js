import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../action';


class Button extends Component {
  componentWillMount() {
    this.props.getAllProducts()
  }

  openProductPage = (event) => {
    const { id } = event.target.dataset;
    const { history } = this.props;
    history.push(`/product/${id}`)
  }
  
  buy = (event) => {
    const { id } = event.target.dataset;
    const { history } = this.props;
    history.push(`/cart/${id}`)
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
            >
             <img 
                src={p.img}
                data-id={p.id}
                key={id}
                onClick={this.openProductPage}
                className='img'
                alt="Product" />
                 <button data-id={p.id} onClick={this.buy}>buy</button>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);