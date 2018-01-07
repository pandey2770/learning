import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Two from './Two';
import Three from './Three';
import Cart from './Cart';
import Main from './Main';
import Login from './Login';
import SignUp from './SignUp';
import Page from './Page';



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Two" component={Two} />
          <Route path="/Three" component={Three} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Main" component={Main} />
          <Route path='/' component={Page} />
        </Switch>
      </div>
    );
  }
}

export default App;
