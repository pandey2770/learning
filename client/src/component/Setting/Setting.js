import React, { Component } from 'react';
import Header from '../Header';
import { setting } from '../../action';
import { connect } from 'react-redux';

class Setting extends Component {
  state = {
    name: '',
    address: '',
    number: '',
    username: '',
    password: ''
  };
  details = event => {
    this.setState({
      [`${event.target.name}`]: event.target.value
    });
  };

  send = event => {
    const { id } = this.props.user;
    const { name, address, number, username, password } = this.state;
    const { history, setting } = this.props;
    setting(history, id, username, password, name, number, address);
  };

  render() {
    const { name, address, number, username, password } = this.state;
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
            <input
              type="text"
              name="username"
              onChange={this.details}
              value={username}
              className="form-control"
              placeholder="usernamer"
            />{' '}
            <input
              type="text"
              name="password"
              onChange={this.details}
              value={password}
              className="form-control"
              placeholder="password"
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
    setting: (history, id, username, password, name, number, address) =>
      dispatch(setting(history, id, username, password, name, number, address))
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(Setting);
