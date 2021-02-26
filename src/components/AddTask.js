import React from 'react';
import '../layouts/AddTask.css';


const AddTask = () => {
    return (
        <div className="AddTask">
            <h1>Dodaj zadanie</h1>
            <form>
                <label htmlFor="taskName">
                    <p>Nazwa zadania: </p>
                    <input type="text" id="taskName" />
                </label>

                <label htmlFor="important">
                    <input type="checkbox" id="important" />
                    <h4>Priorytet</h4>
                </label>

                <label htmlFor="finishDate">
                    <h4>Data rozpoczęcia zadania</h4>
                    <input type="date" id="finishDate" />
                </label>

                <label htmlFor="additionalInfo">
                    <p>Dodaj informacje na temat zadania (opcjonalne)</p>
                    <textarea name="" id="additionalInfo"></textarea>
                </label>

                <button type="submit">Dodaj zadanie</button>
            </form>
        </div >
    );
}

export default AddTask;

// formularz kontrolowany.