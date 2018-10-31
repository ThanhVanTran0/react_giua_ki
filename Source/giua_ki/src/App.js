import React, { Component } from 'react';

import {Col} from 'react-bootstrap'

import {BrowserRouter as Router, Route, } from 'react-router-dom';

import NavBar from './Components/NavBar'
import SignIn from './Components/SignIn'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path='*' component={NavBar}/>
            <Route exact path="/" component={SignIn}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
