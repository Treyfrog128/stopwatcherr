import React, { Component } from 'react';

const Buttons = function ({ days, hours, minutes, seconds, click }) {
  return (
    <div>
      <button type="button" onClick={() => { click(true, days, hours, minutes, seconds); }}>START</button>
    </div>
  );
};

export default Buttons;
