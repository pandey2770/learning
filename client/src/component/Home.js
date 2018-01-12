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
    console.log(this.props.data)
    this.props.data
  }


  render() {
    const { data } = this.props;
    console.log(data)
    return (
      <div>
        <Header history={this.props.history} location={this.props.location} />
        <div>
          
        </div>
        <Link to={`/`}>
          <h3>Back to Demo</h3>
        </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state)
  return  {
    data:state.user
  };
}

function mapDispatchToProps(dispatch) {
  console.log(data)
  return {
    data: () => dispatch(data())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
