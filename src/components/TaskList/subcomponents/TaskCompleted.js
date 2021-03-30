import React, { useContext } from 'react';
import { StoreContext } from '../../../store/StoreProvider';

const TaskCompleted = props => {
    const { tasks, setTasks } = useContext(StoreContext);
    const findTaskID = (ID) => { return tasks.findIndex(item => item.id === ID); }

    const handleRemove = (ID) => {
        const tasksCopy = [...tasks];
        const properLength = tasks.length - 1;
        const index = findTaskID(ID);
        tasksCopy.splice(index, 1);
        if (tasksCopy.length === properLength) { setTasks(tasksCopy) }
    }

    return (
        <div className="TaskCompleted">
            <h3>{props.taskInfo.name}</h3>
            <h3>Termin: {props.taskInfo.doUntil}</h3>
            <button onClick={() => { handleRemove(props.taskInfo.id) }}>X</button>
        </div>
    );
}

export default TaskCompleted;