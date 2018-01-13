import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import { data } from '../action';


class Home extends Component {
  state = {
  };

  componentWillMount() {
      this.props.data()
  }


  render() {
    const { data } = this.props;
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
    data:state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    data: () => dispatch(data())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
