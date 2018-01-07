import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class Home extends Component {
  state = {
    data: []
  };

  async componentWillMount() {
    const { data } = await axios.get('/api/test');
    this.setState({ data });
  }


  render() {
    const {data} = this.state;
    return (
      <div>
        <h1>One</h1>
          {data.map(d => <div key={d.id}>{d.employee_name}</div>)}
        <Link to={`/`}><h3>Back to Demo</h3></Link>
      </div>
    );
  }
}

export default Home;