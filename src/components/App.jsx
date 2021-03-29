import React from 'react';
import StoreProvider from '../store/StoreProvider';
import AddTask from './AddTask/AddTask';
import TaskList from './TaskList/TaskList';
import TaskInfo from './TaskInfo/TaskInfo';
import '../layouts/App.css';

const App = () => {

  return (
    <StoreProvider>
      <div className="App">
        <AddTask />
        <TaskList />
        <TaskInfo />
      </div>
    </StoreProvider>
  )
}

export default App;
