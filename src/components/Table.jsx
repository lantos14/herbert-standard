import React from 'react';

const Table = (props) => {
  return (
    <div className='todo-table'>
      <table>
        <thead>
          <tr>
            <th>to do</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((todo, index) => {
            return (
            <tr key={index}>
              <td>{todo.name}</td>
              <td>{todo.finished ? 'OK' : 'X'}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
