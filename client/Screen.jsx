import React, { Component } from 'react';

class Screen extends Component {
  render() {
    return (
      <div>
        {this.props.time}
      </div>
    );
  }
}

export default Screen;
