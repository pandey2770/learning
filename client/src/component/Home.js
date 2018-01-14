import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAllProducts, getProduct } from '../action';

class Home extends Component {
  componentWillMount() {
    this.props.getAllProducts()
  }

  getProduct = (event) => {
    const { id } = event.target.dataset;
    const { getProduct } = this.props;
    getProduct(id);
  }

  render() {
    const { product, history, location } = this.props;
    return (
      <div>
        <div>
          <Header history={history} location={location} />
        </div>
          {product.map((p, id) => {
            return <img src={p.img} key={id} className='img' alt="Product" />
          })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return  {
    product: state.product
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    getProduct: id => dispatch(getProduct(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
