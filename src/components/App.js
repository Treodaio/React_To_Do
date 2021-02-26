import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskInfo from './TaskInfo';
import '../layouts/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AddTask />
        <TaskList />
        <TaskInfo />
      </div>
    )
  }
}

export default App;
