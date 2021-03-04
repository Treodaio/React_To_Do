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
        if (!task.active) {
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
                <div className="sort">
                    <h1>Lista zadań do zrobienia</h1>
                    <button onClick={() => props.sortTasks(true, 'name')}> A / Z</button>
                    <button onClick={() => props.sortTasks(true, 'date')}> Termin</button>
                </div>
                {activeTasks}
            </section>

            <section>
                <div className="sort">
                    <h2>Zrobione zadania</h2>
                    <button onClick={() => props.sortTasks(false, 'name')}> A / Z</button>
                    <button onClick={() => props.sortTasks(false, 'date')}> Termin</button>
                </div>

                {doneTasks}
            </section>
        </div>
    );
}

export default TaskList;