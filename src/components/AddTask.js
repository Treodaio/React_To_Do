import React from 'react';
import '../layouts/AddTask.css';
const minDate = new Date().toISOString().slice(0, 10);

const AddTask = props => {
    return (
        <div className="AddTask">
            <h1>Dodaj zadanie</h1>

            <form onSubmit={props.addTask}>

                <label htmlFor="taskIdentifier">
                    <p>Nazwa zadania: </p>

                    <input
                        type="text"
                        placeholder="Nazwa"
                        id="taskIdentifier"
                        name="taskName"
                        value={props.name}
                        onChange={props.addTaskInfo}
                    />

                </label>

                <label htmlFor="important">

                    <input
                        type="checkbox"
                        id="important" name="taskPriority"
                        checked={props.priority}
                        onChange={props.addTaskInfo}
                    />
                    <h4>Priorytet</h4>
                </label>

                <label htmlFor="startDate" >
                    <h4>Data rozpoczęcia zadania</h4>

                    <input
                        type="date"
                        min={minDate}
                        id="startDate"
                        name="createDate"
                        value={props.createDate}
                        onChange={props.addTaskInfo}
                    />

                </label>

                <label htmlFor="finishDate">
                    <h4>Data zakończenia zadania</h4>
                    <input
                        type="date"
                        min={props.createDate}
                        id="finishDate"
                        name="doUntil"
                        value={props.doUntil <= props.createDate ? props.createDate : props.doUntil}
                        onChange={props.addTaskInfo}
                    />
                </label>

                <label htmlFor="additionalInfo">
                    <p>Dodaj informacje na temat zadania (opcjonalne)</p>

                    <textarea
                        placeholder="Informacje"
                        id="additionalInfo"
                        name="taskAddInfo"
                        value={props.addInfo}
                        onChange={props.addTaskInfo}>
                    </textarea>
                </label>

                <button type="submit">Dodaj zadanie</button>
            </form>
        </div >
    );
}

export default AddTask;