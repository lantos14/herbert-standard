import React from 'react';

const Table = props => (
  <div className="todo-table">
    <table>
      <thead>
        <tr>
          <th>What should I do?</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((todo, index) => (
          <tr className={`${todo.finished ? 'green' : 'red'}`} key={index}>
            <td className='todo-table-name'>{todo.name}</td>
            <td>
              <button className='finish-button' onClick={() => props.finishTodo(todo.name)}>Done</button>
            </td>
            <td>
              <button className='del-button' onClick={() => props.delTodo(todo.name)}>Del</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
