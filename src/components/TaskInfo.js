import '../layouts/TaskInfo.css';

const TaskInfo = props => {
    const { id, date, priority, active, name, addInfo } = props.task;
    return (
        <div className="TaskInfo">
            <h1>Szczegółowe informacje</h1>
            <h4>{id ? addInfo : ""}</h4>
        </div>
    );
}

export default TaskInfo;