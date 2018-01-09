import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Home extends Component {
  state = {
    data: []
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Header history={this.props.history} location={this.props.location} />
        <h1>One</h1>
        {data.map(d => <div key={d.id}>{d.name}</div>)}
        <Link to={`/`}>
          <h3>Back to Demo</h3>
        </Link>
      </div>
    );
  }
}

export default Home;
