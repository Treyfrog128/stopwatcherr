import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: 1,
    };
  }


  render() {
    const { time } = this.state;
    return (
      <div>
        <h1>Meow</h1>
        <div>{ time }</div>
      </div>
    );
  }
}

export default App;
