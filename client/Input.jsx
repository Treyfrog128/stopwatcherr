import React, { Component } from 'react';

const Input = function ({ days, hours, minutes, seconds, handleChange }) {
  return (
    <div>
      <input type="number" name="days" value={days} onChange={handleChange} />
      <input type="number" name="hours" value={hours} onChange={handleChange} />
      <input type="number" name="minutes" value={minutes} onChange={handleChange} />
      <input type="number" name="seconds" value={seconds} onChange={handleChange} />
    </div>
  );
};

export default Input;
