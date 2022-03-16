import React, { Component } from 'react';
// import { render } from 'react-dom';
import Screen from './Screen.jsx';
import Buttons from './Buttons.jsx';
import Input from './Input.jsx';
import timeRemaining from './logic.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: 1,
      setTime: 500,
      timeStart: 144,
      days: 0,
      hours: 1,
      minutes: 0,
      seconds: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: timeRemaining() });
    }, 1000);
  }

  handleClick(click, days, hours, minutes, seconds) {
    if (click) {
      this.setState({ time: days });
    }
  }

  handleChange(event) {
    this.setState({ days: event.target.value });
  }
  // DO NOT FORGET TO BIND FUNCTION TO THIS KEYWORD

  render() {
    return (
      <div>
        <h1>Meow</h1>
        <div>
          <Screen time={this.state.time} />
        </div>
        <div>
          <Input
            days={this.state.days}
            hours={this.state.hours}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <Buttons
            click={this.handleClick}
            days={this.state.days}
            hours={this.state.hours}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
          />
        </div>
      </div>
    );
  }
}

export default App;
