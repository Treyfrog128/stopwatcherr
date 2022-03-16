import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
      <div>
        <button onClick = {() => {this.props.click(true, this.props.days, this.props.hours, this.props.minutes, this.props.seconds)}}>Start</button>
      </div>
    );
  }
}

export default Buttons;
