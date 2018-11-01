import React, { Component } from 'react';

import {BrowserRouter as Router, Route, } from 'react-router-dom';

import NavBar from './Components/NavBar'
import SignIn from './Components/SignIn'
import Chat from './Components/Chat'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path='*' component={NavBar}/>
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/chat" component={Chat}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
