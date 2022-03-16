import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div>
        <input type="number" name='days' value={this.props.days} onChange={this.props.handleChange} />
        <input type="number" name='hours' value={this.props.hours} onChange={this.props.handleChange} />
        <input type="number" name='minutes' value={this.props.minutes} onChange={this.props.handleChange} />
        <input type="number" name='seconds' value={this.props.seconds} onChange={this.props.handleChange} />
      </div>
    );
  }
}

export default Input;
