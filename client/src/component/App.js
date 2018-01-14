import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Two from './Two';
import Three from './Three';
import Cart from './Cart';
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';
import '../style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/two" component={Two} />
          <Route path="/three" component={Three} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
