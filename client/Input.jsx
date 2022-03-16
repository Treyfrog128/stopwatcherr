import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div>
        <input type="number" value={this.props.days} onChange={this.props.handleChange} />
        <input type="number" value={this.props.hours} onChange={this.props.handleChange} />
        <input type="number" value={this.props.minutes} onChange={this.props.handleChange} />
        <input type="number" value={this.props.seconds} onChange={this.props.handleChange} />
      </div>
    );
  }
}

export default Input;
