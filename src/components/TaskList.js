import React from 'react';
import ActiveTask from './ActiveTask';
import TaskCompleted from './TaskCompleted';

import '../layouts/TaskList.css';

const TaskList = props => {
    const activeTasks = props.tasks.map(task => {
        if (task.active) {
            return <ActiveTask
                key={task.id}
                taskInfo={task}
                end={props.endTask}
                handleInfo={props.handleTaskInfo}
            />
        }
        else return null;
    })
    const doneTasks = props.tasks.map(task => {
        if (task.active === false) {
            return <TaskCompleted
                key={task.id}
                taskInfo={task}
                remove={props.removeTask}
            />
        }
        else return null;
    })

    return (
        <div className="TaskList">
            <section>
                <h1>Lista zadań do zrobienia</h1>
                {activeTasks}
            </section>
            <section>
                <h2>Zrobione zadania</h2>
                {doneTasks}
            </section>
        </div>
    );
}

export default TaskList;