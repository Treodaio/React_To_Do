const AddTask = () => {
    return (
        <div className="AddTask">
            <h1>Adding task</h1>
            <form>
                <label htmlFor="taskName">
                    <input type="text" id="taskName" />
                </label>

                <label htmlFor="important">
                    <input type="checkbox" id="important" />
                    <h4>Pilne</h4>
                </label>

                <label htmlFor="finishDate">
                    <h4>Data rozpoczęcia zadania</h4>
                    <input type="date" id="finishDate" />
                </label>

            </form>
        </div>
    );
}

export default AddTask;

// formularz kontrolowany.