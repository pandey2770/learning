import React, { Component } from 'react';
import Header from './Header';
import { updateData } from '../action';
import { connect } from 'react-redux';

class Profile extends Component {
  // TODO: show already saved data
  // create single user in the state
  state = {
    name: '',
    address: '',
    number: '',
    username: '',
    password: ''
  };

  updateInput = event => {
    this.setState({
      [`${event.target.name}`]: event.target.value
    });
  };

  send = event => {
    const { updateData, user: { id }} = this.props;
    const { name, address, number, username, password } = this.state;
    updateData(id, {username, password, name, number, address});
  };

  render() {
    const { name, address, number, username, password } = this.state;
    const { history, location } = this.props;
    return (
      <div>
        <Header history={history} location={location} />
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              onChange={this.updateInput}
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
              onChange={this.updateInput}
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
    updateData: (history, id, username, password, name, number, address) =>
      dispatch(updateData(history, id, username, password, name, number, address))
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(Profile);
