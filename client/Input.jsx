import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div>
        <input type="number" value={this.props.days} onChange={this.props.onChange} />
        <input type="number"></input>
        <input type="number"></input>
        <input type="number"></input>
      </div>
    );
  }
}

export default Input;