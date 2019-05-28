import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ addFn }) => (
  <div className="input-field">
    <input className="add-input" type="text" />
    <button type="button" onClick={addFn}>Set</button>
  </div>
);

Input.propTypes = {
  addFn: PropTypes.func.isRequired,
};

export default Input;
