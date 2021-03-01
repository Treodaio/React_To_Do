import React from 'react';
const ActiveTask = props => {
    return (
        <div className="ActiveTasks">
            <h3 className={props.taskInfo.priority ? "priority" : ""} >{props.taskInfo.name}</h3> <h3>Data : {props.taskInfo.date}</h3>
            <button>Zrobione</button>
        </div>
    );
}

export default ActiveTask;