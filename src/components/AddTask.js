import React from 'react';
import '../layouts/AddTask.css';


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

                <label htmlFor="finishDate">
                    <h4>Data rozpoczęcia zadania</h4>

                    <input
                        type="date"
                        id="finishDate"
                        name="taskDate"
                        value={props.date}
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