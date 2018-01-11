import React, { Component } from 'react';
import Header from '../Header';

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
    const { name, address, number } = this.state;
  };

  render() {
    const { name, address, number } = this.state;
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

export default Setting;
