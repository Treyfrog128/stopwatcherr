import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: 1,
    };
  }

  componentDidMount() {
    const countDownDate = new Date('Mar 16, 2022 16:37:52').getTime();
    setInterval(() => {
      const timeNow = new Date().getTime();
      this.setState({ time: (countDownDate - timeNow) });
    }, 1000);
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
