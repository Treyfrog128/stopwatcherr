import React, { Component } from 'react';
// import { render } from 'react-dom';
import Screen from './Screen.jsx';
import Buttons from './Buttons.jsx';
import timeRemaining from './logic.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: 1,
    };
  }

  // componentDidMount() {
  //   const countDownDate = new Date('Mar 16, 2022 16:37:52').getTime();
  //   setInterval(() => {
  //     const timeNow = new Date().getTime();
  //     this.setState({ time: (countDownDate - timeNow) });
  //   }, 1000);
  // }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: timeRemaining() });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Meow</h1>
        <div>
          <Screen time={this.state.time} />
        </div>
        <div>
          <Buttons />
        </div>
      </div>
    );
  }
}

export default App;
