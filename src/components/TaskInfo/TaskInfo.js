import { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import '../../layouts/TaskInfo.css';

const TaskInfo = () => {
    const { singleTask } = useContext(StoreContext);
    const { taskAge } = useContext(StoreContext);
    const { timeBetween } = useContext(StoreContext);
    const { id, createDate, addInfo } = singleTask;

    return (
        <div className="TaskInfo">
            <h1>Szczegółowe informacje </h1>
            <section>
                <h3>Notatki</h3>
                <p>{id ? addInfo : ""}</p>
            </section>

            <section>
                <h3>Rozpoczęto dnia: </h3>
                <p>{createDate ? createDate : ""}</p>
            </section>

            <section>
                <h3>Przydzielonego czasu: </h3>
                <p>{timeBetween && id ? `${timeBetween} dni` : "---"}</p>
            </section>

            <section className="days">
                <h3>Dni upłynęło: </h3>
                <p>{taskAge && id ? taskAge : "---"}</p>
            </section>
        </div>
    );
}

export default TaskInfo;