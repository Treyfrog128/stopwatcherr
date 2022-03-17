import React, { Component } from 'react';
import { placeholder } from './logic.js';

const Input = function ({ days, hours, minutes, seconds, handleChange }) {
  return (
    <div>
        <input type="number" min="0" name="days" placeholder="days" value={placeholder(days)} onChange={handleChange} />
        <input type="number" min="0" name="hours" placeholder="hours" value={placeholder(hours)} onChange={handleChange} />
        <input type="number" min="0" name="minutes" placeholder="minutes" value={placeholder(minutes)} onChange={handleChange} />
        <input type="number" min="0" name="seconds" placeholder="seconds" value={placeholder(seconds)} onChange={handleChange} />
    </div>
  );
};

export default Input;
