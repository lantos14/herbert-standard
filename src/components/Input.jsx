import React from 'react';

const Input = props => (
  <div className="input-field">
    <input className="add-input" type="text" />
    <button onClick={props.addFn}>Set</button>
  </div>
);

export default Input;
