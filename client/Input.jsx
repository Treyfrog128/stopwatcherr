import React, { Component } from 'react';

const Input = function ({ days, hours, minutes, seconds, handleChange }) {
  return (
    <div>
      <form method="POST" action="/set">
        <input type="number" min="0" name="days" value={days} onChange={handleChange} />
        <input type="number" min="0" name="hours" value={hours} onChange={handleChange} />
        <input type="number" min="0" name="minutes" value={minutes} onChange={handleChange} />
        <input type="number" min="0" name="seconds" value={seconds} onChange={handleChange} />
        <button>SET</button>
      </form>
    </div>
  );
};

export default Input;
