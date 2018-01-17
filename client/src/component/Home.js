import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAllProducts, buyLogin } from '../action';

class Home extends Component {
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

  buyLogin = (event) => {
    const { id } = event.target.dataset;
    this.props.buyLogin(id);
  }

  render() {
    const { product,user, history, location } = this.props;
    return (
      <div>
        <div>
          <Header history={history} location={location} />
        </div>
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
                {!user? ( <button data-id={p.id} onClick={this.buyLogin} >buy</button>)
                :( <button data-id={p.id} onClick={this.buy} >buy</button>)}
            </div>
          })} 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return  {
    user: state.user,
    product: state.product,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    buyLogin:(id) => dispatch(buyLogin(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);