import React, { Component } from 'react';

import {Col} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <Col xs={12} md={10} mdPush={1} style={{background: 'red'}}/>
    );
  }
}

export default App;
