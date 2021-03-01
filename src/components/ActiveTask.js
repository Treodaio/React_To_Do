import React from 'react';
const ActiveTask = props => {
    return (
        <div className="ActiveTasks" data-key={props.taskInfo.id}>
            <h3 className={props.taskInfo.priority ? "priority" : ""}>{props.taskInfo.name} </h3>
            <h3>Data rozpoczęcia: {props.taskInfo.date}</h3>
            <button onClick={() => { props.end(props.taskInfo.id) }}>Zrobione</button>
        </div>
    );
}

export default ActiveTask;