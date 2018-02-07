import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getProduct } from '../action';

class Product extends Component {
  state = {
    product: undefined
  };

  componentWillMount() {
    const { id } = this.props.match.params;
    if (id) {
      const { productList } = this.props;
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

  componentWillReceiveProps(props) {
    const { id } = props.match.params;
    const { product } = this.state;
    const { productList } = props;
    if (id && !product && productList !== this.props.productList) {
      const product = productList.find(p => p.id ===  id);
      if (product) {
        this.setState({ product });
      }
    }
  }

  render() {
    const { history, location } = this.props;
    const { product } = this.state;
    return (
      <div>
        <div>
          <Header history={history} location={location} />
        </div>
        <img src={product && product.img} className="img-big" alt="Product" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    productList: state.product
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProduct: id => dispatch(getProduct(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
