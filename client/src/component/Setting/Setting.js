import React, { Component } from 'react';
import Header from '../Header';
import { setting } from '../../action';
import { connect } from 'react-redux';

class Setting extends Component {
  state = {
    name: '',
    address: '',
    number: ''
  };
  details = event => {
    this.setState({
      [`${event.target.name}`]: event.target.value
    });
  };

  send = event => {
    const { id } = this.props.user;
    const { name, address, number } = this.state;
    const { history, setting } = this.props;
    setting( history, id, name, number, address );
    console.log (id, name, number, address,'id setting')
  };

  render() {
    const { name, address, number } = this.state;
    const { user } = this.props;
    return (
      <div>
        <Header history={this.props.history} location={this.props.location} />
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              onChange={this.details}
              value={name}
              className="form-control"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              onChange={this.details}
              value={address}
              className="form-control"
              placeholder="Address"
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="number"
              onChange={this.details}
              value={number}
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
          <input type="button" value="send" onClick={this.send} />
        </form>
      </div>
    );
  }
}

function mapStateToprpos(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setting: (history, id, name, number, address) =>
      dispatch(setting(history, id, name, number, address))    
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(Setting);