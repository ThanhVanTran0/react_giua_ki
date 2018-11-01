import React, { Component } from 'react';

import {BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './Components/Routers/PublicRoute'
import PrivateRoute from './Components/Routers/PrivateRoute'

import SignIn from './Components/SignIn/SignIn'
import Chat from './Components/Chat'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <PublicRoute exact={true} path="/" component={SignIn}/>
            <PrivateRoute exact={true} path="/chat" component={Chat}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
