import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { logoutUser, currentUser } from '../action';
import { connect } from 'react-redux';

class Header extends Component {
  state = {
    user: undefined
  };

  componentWillMount() {
    this.props.currentUser();
  }

  logoutUser = () => {
    const { history, logoutUser } = this.props;
    logoutUser(history);
  };

  render() {
    const { user } = this.props;
    const { match, location, history } = this.props;
    return (
      <div>
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
                {!user ? (
                  <Link to={`/Login`}>
                    <li className="nav-item nav-link">Login</li>
                  </Link>
                ) : (
                  <a onClick={this.logoutUser}>
                    <li className="nav-item cursor nav-link">Logout</li>
                  </a>
                )}
                <Link to={`/Cart`}>
                  <li className="nav-item nav-link">Cart</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
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
    currentUser: () => dispatch(currentUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);