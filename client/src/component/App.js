import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import  './Css.css';
import Home from './Home';
import Two from './Two';
import Three from './Three';
import Cart from './Cart';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import axios from 'axios';



class App extends Component {

  render() {
    return (
      <div>
        
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Two" component={Two} />
          <Route path="/Three" component={Three} />
          <Route path="/Cart" component={Cart} />
          <Route path="/SignUp" component={SignUp} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
