import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
      <div>
        <button onClick = {() => {this.props.click(true, this.props.days)}}>Start</button>
      </div>
    );
  }
}

export default Buttons;