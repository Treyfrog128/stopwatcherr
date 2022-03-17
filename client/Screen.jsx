import React, { Component } from 'react';
import { timeCalc } from './logic.js';

const Screen = function ({ time }) {
  const { days, hours, minutes, seconds } = timeCalc(time);
  return (
    <div>
      <div id="screen">{days}d {hours}h {minutes}m {seconds}s</div>
    </div>
  );
};

export default Screen;
