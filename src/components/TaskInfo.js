import '../layouts/TaskInfo.css';

const TaskInfo = props => {
    const { id, createDate, addInfo } = props.task;

    return (
        <div className="TaskInfo">
            <h1>Szczegółowe informacje </h1>
            <section>
                <h3>Notatki</h3>
                <p>{id ? addInfo : ""}</p>
            </section>

            <section>
                <h3>Utworzono dnia: </h3>
                <p>{createDate ? createDate : ""}</p>
            </section>

            <section>
                <h3>Przydzielonego czasu: </h3>
                <p>{props.timeToTask && id ? props.timeToTask : "---"}</p>
            </section>

            <section className="days">
                <h3>Dni upłynęło: </h3>
                <p>{props.taskAge && id ? props.taskAge : "---"}</p>
            </section>

        </div>
    );
}

export default TaskInfo;