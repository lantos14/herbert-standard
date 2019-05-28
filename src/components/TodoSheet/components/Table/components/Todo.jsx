/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';

const Todo = (
  {
    finished,
    name,
    finishTodo,
    delTodo,
  },
) => {
  let trStyle;
  if (finished) {
    trStyle = css`
    background-color: lightgreen;
  `;
  } else {
    trStyle = css`
    background-color: pink;
  `;
  }

  return (
    <tr css={trStyle} key={Math.random()}>
      <td className="todo-table-name">{name}</td>
      <td>
        <button
          className="finish-button"
          type="button"
          onClick={() => finishTodo(name)}
        >
        Done
        </button>
      </td>
      <td>
        <button
          className="del-button"
          type="button"
          onClick={() => delTodo(name)}
        >
        Del
        </button>
      </td>
    </tr>
  );
};

Todo.propTypes = {
  finished: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  finishTodo: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todo;
