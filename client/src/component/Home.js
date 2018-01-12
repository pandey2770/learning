import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { data } from '../action';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    data: ''
  };

  componentWillMount() {
  }


  render() {
    const { data } = this.props;
    console.log(data)
    return (
      <div>
        <Header history={this.props.history} location={this.props.location} />
        <div>
          check
        </div>
        <Link to={`/`}>
          <h3>Back to Demo</h3>
        </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return  {
    data:state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
