import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser, getCurrentUser } from '../../action';
import { connect } from 'react-redux';

class Header extends Component {
  state = {
    user: undefined
  };

  componentWillMount() {
    this.props.getCurrentUser();
    if (
      (this.props.location.pathname === '/Login' ||
        this.props.location.pathname === '/SignUp') &&
      this.props.user
    ) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(props) {
    if (
      (props.location.pathname === '/Login' ||
        props.location.pathname === '/SignUp') &&
      props.user
    ) {
      props.history.push('/');
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
                  <Link to={`/Home`}>
                    <li className="nav-item nav-link active">
                      Home <span className="sr-only">(current)</span>
                    </li>
                  </Link>
                  <Link to={`/Two`}>
                    <li className="nav-item nav-link">Features</li>
                  </Link>
                  <Link to={`/Three`}>
                    <li className="nav-item nav-link">Pricing</li>
                  </Link>
                  <Link to={`/Cart`}>
                    <li className="nav-item nav-link">Cart</li>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="navbar navbar-expand navbar-light bg-light">
          {!user ? (
            <Link to={`/Login`}>
              <li className="nav-item nav-link">Login</li>
            </Link>
          ) : (
            <div className="dropdown">
              <button
                className=" btn-primary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                {user && user.username}name
                <span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <a onClick={this.logoutUser}>
                  <li className="nav-item cursor nav-link">Logout</li>
                </a>
                <li>setting</li>
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
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: history => dispatch(logoutUser(history)),
    getCurrentUser: () => dispatch(getCurrentUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
{
  /* */
}
