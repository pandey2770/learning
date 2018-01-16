import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
  
  buy = (event) => {
    const { id } = event.target.dataset;
    const { history } = this.props;
    history.push(`/cart/${id}`)
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
                {!user? ( <Link to={`/login/${p.id}`}><button data-id={p.id} >buy</button></Link>)
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);