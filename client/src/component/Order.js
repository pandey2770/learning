import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hide, cashOrder, getAllOrder } from '../action';

class Order extends Component {
  componentDidMount() {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 27) this.props.hide();
    });
  }

  close = () => {
    this.props.hide();
  };

  cashOrder = () => {
    this.props.cashOrder('Pending');
  };

  render() {
    const { data } = this.props.popUp;
    if (!this.props.popUp.showConfirm) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-content">
          <input
            type="button"
            value="X"
            onClick={this.close}
            className="closeButton"
          />
          <h2 className="center-center">Confirm Your Order</h2>
          {data.map((d, id) =>
            <div key={id}>
              <img src={d.img} className="img" alt="Product" />
            </div>
          )}
          <button onClick={this.cashOrder}>Cash on delivery</button>
          <button>Card / Net Banking</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    popUp: state.popUp
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hide: state => dispatch(hide(state)),
    cashOrder: state => dispatch(cashOrder(state)),
    getAllOrder: () => dispatch(getAllOrder())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
