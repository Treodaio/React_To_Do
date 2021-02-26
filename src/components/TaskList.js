import React from 'react';
import ActiveTask from './ActiveTask';
import TaskCompleted from './TaskCompleted';
import '../layouts/TaskList.css';
const TaskList = () => {
    return (
        <div className="TaskList">
            <h1>Lista zadań do zrobienia</h1>
            <ActiveTask />
            <h2>Zrobione zadania</h2>
            <TaskCompleted />
        </div>
    );
}

export default TaskList;