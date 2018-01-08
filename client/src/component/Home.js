import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

class Home extends Component {
  state = {
    data: []
  };

  async componentWillMount() {
    const { data } = await axios.get('/api/user');
    this.setState({ data });
  }

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
