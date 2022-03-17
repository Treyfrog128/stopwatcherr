import React, { Component } from 'react';
// import { render } from 'react-dom';
import Screen from './Screen.jsx';
import Buttons from './Buttons.jsx';
import Input from './Input.jsx';
import { countdown } from './logic.js';
import { timeSetpointCalc } from './logic.js';
import { getCookie } from './logic.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timeRemaining: 1,
      timeSetpoint: 0,
      timeStart: 0,
      days: 0,
      hours: 2,
      minutes: 1,
      seconds: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (getCookie("timeStart") && getCookie("timeSetpoint")) {
      this.setState({ timeStart: Number(getCookie("timeStart")), timeSetpoint: Number(getCookie("timeSetpoint")) });
    }
    setInterval(() => {
      if (this.state.timeSetpoint !== 0 && this.state.timeStart !== 0) {
        this.setState({ timeRemaining: countdown(this.state.timeStart, this.state.timeSetpoint) });
      }
    }, 1000);
  }

  // the countdown function updates the timeRemaining every 1s based on timeStart and timeSetpoint
  componentDidUpdate() {
  }

  // when start button is clicked, this function calculates
  // the timeSetpoint and timeStart based on the state d,h,m,s
  handleClick(click, days, hours, minutes, seconds) {
    if (click) {
      this.setState({ timeSetpoint: timeSetpointCalc(this.state.days, this.state.hours, this.state.minutes, this.state.seconds), timeStart: new Date().getTime() });
    }
  }

  // this function updates the state values for each d,h,m,s based on what is in their input field
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  // DO NOT FORGET TO BIND FUNCTION TO THIS KEYWORD

  render() {
    return (
      <div>
        <h1>Meow</h1>
        <div>
          <Screen time={this.state.timeRemaining} />
        </div>
        <div>
          <Input
            days={this.state.days}
            hours={this.state.hours}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            handleChange={this.handleChange}
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
