import React from 'react';
const TaskCompleted = props => {
    return (
        <div className="TaskCompleted">
            <h3>{props.taskInfo.name}</h3>
            <h3>Termin: {props.taskInfo.doUntil}</h3>
            <button onClick={() => { props.remove(props.taskInfo.id) }}>X</button>
        </div>
    );
}

export default TaskCompleted;