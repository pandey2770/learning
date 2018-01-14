import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAllProducts } from '../action';

class Home extends Component {
  componentWillMount() {
    this.props.getAllProducts()
  }

  openProductPage = (event) => {
    const { id } = event.target.dataset;
    const { history } = this.props;
    history.push(`/product/${id}`)
  }

  render() {
    const { product, history, location } = this.props;
    return (
      <div>
        <div>
          <Header history={history} location={location} />
        </div>
          {product.map((p, id) => {
            return <img
              src={p.img}
              data-id={p.id}
              key={id}
              onClick={this.openProductPage}
              className='img'
              alt="Product"
            />
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
