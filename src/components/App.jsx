import React, { Component } from 'react';
import TimeSheet from '../containers/TimeSheet';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>lute-React App</h1>
        <TimeSheet />
      </div>
    );
  }
}

export default App;
