import React from 'react';
import PropTypes from 'prop-types';

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
          <tr className={`${todo.finished ? 'green' : 'red'}`} key={Math.random()}>
            <td className="todo-table-name">{todo.name}</td>
            <td>
              <button
                className="finish-button"
                type="button"
                onClick={() => finishTodo(todo.name)}
              >
                Done
              </button>
            </td>
            <td>
              <button
                className="del-button"
                type="button"
                onClick={() => delTodo(todo.name)}
              >
                Del
              </button>
            </td>
          </tr>
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
