import React, { Component } from 'react';
import './App.css';
import TasksContainer from './components/tasksContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Task Board</h1>
        </div>
        <TasksContainer />
      </div>
    );
  }
}

export default App;
