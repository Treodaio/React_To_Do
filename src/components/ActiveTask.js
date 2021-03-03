import React from 'react';
const ActiveTask = props => {
    return (
        <div className="ActiveTasks" onClick={() => { props.change(props.taskInfo.id) }}>
            <h3 className={props.taskInfo.priority ? "priority" : ""}>{props.taskInfo.name} </h3>
            <h3>Data rozpoczęcia: {props.taskInfo.date}</h3>
            <button onClick={(e) => { props.end(props.taskInfo.id, e) }}>OK</button>
        </div>
    );
}

export default ActiveTask;