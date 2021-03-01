import React from 'react';
const TaskCompleted = props => {
    return (
        <div className="TaskCompleted">
            <h3>{props.taskInfo.name}</h3>
            <h3>Data rozpoczęcia: {props.taskInfo.date}</h3>
            <button onClick={() => { props.remove(props.taskInfo.id) }}>Usuń</button>
        </div>
    );
}

export default TaskCompleted;
// bez data-key. Zdradza niepotrzebnie informacje o ID