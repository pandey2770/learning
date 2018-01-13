import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { data } from '../action';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    user: ''
  };

  componentWillMount() {
      this.props.data()
  }


  render() {
    const { user } = this.props;
    console.log(user&&user.data)
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
  console.log(state.user&&state.user.data,'1')
  return  {
    user:state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    data: () => dispatch(data())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
