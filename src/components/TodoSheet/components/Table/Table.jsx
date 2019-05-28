/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';
import Todo from './components/Todo';

const trGreen = css`
  background-color: lightgreen;
`;
const trRed = css`
  background-color: lightred;
`;

const Table = ({ data, finishTodo, delTodo }) => (
  <div className="todo-table">
    <table>
      <thead>
        <tr className="table-title">
          <th>What should I do?</th>
        </tr>
      </thead>
      <tbody>
        {data.map(todo => (
          <Todo
            finished={todo.finished}
            name={todo.name}
            finishTodo={finishTodo}
            delTodo={delTodo}
          />
        ))}
      </tbody>
    </table>
  </div>
);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  finishTodo: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Table;
