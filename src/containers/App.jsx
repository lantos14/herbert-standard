/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import TodoSheet from '../components/TodoSheet';

// emotions css string example
const appStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  padding: 5px;
`;

const App = () => (
  <div className="app" css={appStyle}>
    <h1>Herbert React App</h1>
    <TodoSheet />
  </div>
);

export default App;
