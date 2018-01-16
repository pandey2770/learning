import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser, getUser, server } from '../action';

class Header extends Component {
  state = {
    user: undefined,
  };

  componentWillMount() {
    this.props.server();
    this.props.getUser();
    const { user, location: { pathname }, history } = this.props;
    if ((pathname === '/Login' || pathname === '/SignUp') && user) {
      history.push('/');
    }
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
    const { user } = this.props;
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
                  <Link to={`/two`}>
                    <li className="nav-item nav-link">Features</li>
                  </Link>
                  <Link to={`/three`}>
                    <li className="nav-item nav-link">Pricing</li>
                  </Link>
                  <Link to={`/cart`}>
                    <li className="nav-item nav-link">Cart</li>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="navbar navbar-expand navbar-light bg-light">
          {!user ? (
            <Link to={`/login`}>
              <li className="nav-item nav-link">Login</li>
            </Link>
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
  console.log(state)
  return {
    error:state.error,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: history => dispatch(logoutUser(history)),
    getUser: () => dispatch(getUser()),
    server: history => dispatch(server(history)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
