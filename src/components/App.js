import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskCompleted from './TaskCompleted';
import TaskInfo from './TaskInfo';
import '../layouts/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AddTask />
        <TaskList />
        <TaskCompleted />
        <TaskInfo />
      </div>
    )
  }
}

export default App;
