import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts, getProductCart, removeCart } from '../action';
import Header from './Header';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      add: false,
    };
  }
  
  componentWillMount() {
    this.props.getAllProducts();
  }

  addToCart = event => {
    const { id } = event.target.dataset;
    const { add } = this.state;    
    this.setState({
      add: !add
    });
    this.props.getProductCart(id, 'add');
  };

  removeCart = event => {
    const { id } = event.target.dataset;
    const { add } = this.state;    
    this.props.removeCart(id);
    this.setState({
      add: !add
    });
  };

  render() {
    const { product, history, location } = this.props;
    return (
      <div>
        <div>
          <Header history={history} location={location} />
        </div>
        <div>
          {product.map((p, id) =>
            <div key={id} className="img" alt="Product">
              <Link to={`/product/${p.id}`}>
                <img src={p.img} data-id={p.id} className="img" alt="Product" />
              </Link>
              {this.state.add
                ? <button data-id={p.id} onClick={this.removeCart}>
                    remove from cart
                  </button>
                : <button data-id={p.id} onClick={this.addToCart}>
                    Add to Cart
                  </button>}
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    product: state.product,
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    getProductCart: (id, state) => dispatch(getProductCart(id,state)),
    removeCart: id => dispatch(removeCart(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
