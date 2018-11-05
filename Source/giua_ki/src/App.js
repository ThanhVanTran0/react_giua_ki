import React, { Component } from 'react';

import {BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './Components/Routers/PublicRoute'
import PrivateRoute from './Components/Routers/PrivateRoute'

import SignIn from './Components/SignIn/SignIn'
import Chat from './Components/Chat/Chat'

import handleUserState from './Modules/handleUserState'

class App extends Component {


  componentDidMount() {
    handleUserState();
  }

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
