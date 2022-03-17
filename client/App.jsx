import React, { Component } from 'react';
// import { render } from 'react-dom';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import Screen from './Screen.jsx';
import Buttons from './Buttons.jsx';
import Input from './Input.jsx';
import Celebrate from './Celebrate.jsx';
import { countdown } from './logic.js';
import { doneFlag } from './logic.js';
import { timeSetpointCalc } from './logic.js';
import { getCookie } from './logic.js';

class App extends Component {
  constructor() {
    let timeSetpoint = 0;
    let timeStart = 0;
    let timeRemaining = 1;
    if (getCookie("timeStart") && getCookie("timeSetpoint")) {
      timeStart = Number(getCookie("timeStart"));
      timeSetpoint = Number(getCookie("timeSetpoint"));
      timeRemaining = countdown(timeStart, timeSetpoint);
    }
    super();
    this.state = {
      timeRemaining,
      timeSetpoint,
      timeStart,
      timeDone: false,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (getCookie("timeStart") && getCookie("timeSetpoint")) {
      this.setState({ timeStart: Number(getCookie("timeStart")), timeSetpoint: Number(getCookie("timeSetpoint")) });
    }
    const myFunc = doneFlag();
    setInterval(() => {
      if (this.state.timeSetpoint !== 0 && this.state.timeStart !== 0) {
        this.setState({
          timeRemaining: countdown(this.state.timeStart, this.state.timeSetpoint),
          timeDone: myFunc(this.state.timeRemaining),
        });
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
      <div id="main">
        <div id="title">
          <h1>Stopwatcherr</h1>
        </div>
        <div id="function">
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
        <div>
          <Celebrate timeDone={this.state.timeDone} />
        </div>
      </div>
    );
  }
}

export default App;
