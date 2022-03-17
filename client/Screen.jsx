import React, { Component } from 'react';
import { timeCalc } from './logic.js';

const Screen = function ({ time }) {
  const { days, hours, minutes, seconds } = timeCalc(time);
  return (
    <div>
      <div id="screen">{days}<span>d</span> {hours}<span>h</span> {minutes}<span>m</span> {seconds}<span>s</span></div>
    </div>
  );
};

export default Screen;
