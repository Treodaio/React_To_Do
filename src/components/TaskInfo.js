import '../layouts/TaskInfo.css';

const TaskInfo = props => {
    const { id, date, priority, active, name, addInfo } = props.task;
    const { clear } = props;
    console.log('Clear w taskInfo: ' + clear);
    return (
        <div className="TaskInfo">
            <h1>Szczegółowe informacje</h1>
            <h4>{clear ? addInfo : ""}</h4>
        </div>
    );
}

export default TaskInfo;