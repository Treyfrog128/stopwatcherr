import React, { Component } from 'react';
import { setCookies } from './logic';

const Buttons = function ({ days, hours, minutes, seconds, click, setCookies, timeStart, timeSetpoint }) {
  return (
    <div>
      <button type="button" onClick={() => { click(true, days, hours, minutes, seconds); }}>START</button>
    </div>
  );
};

export default Buttons;
