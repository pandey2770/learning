import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser, getUser, showLogin, showSignUp } from '../action';

class Header extends Component {
  state = {
    user: undefined
  };

  componentWillMount() {
    this.props.getUser();
    const { user, location: { pathname }, history } = this.props;
    if ((pathname === '/Login' || pathname === '/SignUp') && user) {
      history.push('/');
    }
  }
    
  showLogin = () => {
    this.props.showLogin();
  }
  
  showSignUp  = () => {
    this.props.showSignUp();
  }

  componentWillReceiveProps(props) {
    const { user, location: { pathname }, history } = props;
    if ((pathname === '/Login' || pathname === '/SignUp') && user) {
      history.push('/');
    }
  }

  logoutUser = () => {
    const { history, logoutUser } = this.props;
    logoutUser(history);
  };

  render() {
    const { user, cart } = this.props;
    return (
      <div className="style">
        <div className="width">
          <nav className="navbar navbar-expand navbar-light bg-light">
            <h1 className="navbar-brand">DEMO</h1>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav">
                <ul className="style">
                  <Link to={`/home`}>
                    <li className="nav-item nav-link active">
                      Home <span className="sr-only">(current)</span>
                    </li>
                  </Link>
                  <Link to={`/features`}>
                    <li className="nav-item nav-link">Features</li>
                  </Link>
                  <Link to={`/cart`}>
                    <li className="nav-item nav-link">Cart{cart.length > 0 && ` - ${cart.length}`}</li>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="navbar navbar-expand navbar-light bg-light">
          {!user ? (<div className='style'>
              <li className="nav-item nav-link cursor" onClick={this.showLogin} >Login</li>
              <li className="nav-item nav-link cursor" onClick={this.showSignUp} >SignUp</li></div>
          ) : (
            <div className="dropdown">
              <button
                className=" btn-primary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                {user && user.email}
                <span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <a onClick={this.logoutUser}>
                  <li className="nav-item nav-link">Logout</li>
                </a>
                <Link to={`/setting`}>
                  <li className="nav-item nav-link">Setting</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    error: state.error,
    user: state.user.user,
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: history => dispatch(logoutUser(history)),
    getUser: () => dispatch(getUser()),
    showLogin: () => dispatch(showLogin()),
    showSignUp: () => dispatch(showSignUp()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
