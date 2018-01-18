import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import ButtonUser from './ButtonUser';
import Button from './Button';


class Home extends Component {

  render() {
    const {user, history, location } = this.props;
    return (
      <div>
        <div>
          <Header history={history} location={location} />
        </div>
          {!user? 
            ( 
              <Button/>
            ):( 
              <ButtonUser/>
            )
          }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return  {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);