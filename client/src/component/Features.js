import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Two extends Component {
  render() {
    const { history, location } = this.props;
    return (
      <div>
        <Header history={history} location={location} />
        <h1>Two</h1>
        <Link to={'/'}>
          <h3>Back to Demo</h3>
        </Link>
      </div>
    );
  }
}

export default Two;