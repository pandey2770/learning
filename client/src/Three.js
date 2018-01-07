import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Three extends Component {
  render() {
    return (
      <div>
        <h1>Three</h1>
        <Link to={`/`}><h3>Back to Demo</h3></Link>
      </div>
    );
  }
}

export default Three;