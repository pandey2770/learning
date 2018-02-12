import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hide } from '../action';

class Cart extends Component {
  componentWillMount() {
    console.log(this.props, 'asdadasdas');
  }

  componentDidMount() {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 27) this.props.hide();
    });
  }

  close = () => {
    this.props.hide();
  };

  render() {
    if (!this.props.popUp) {
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
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    popUp: state.popUp.showConfirm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hide: state => dispatch(hide(state))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
