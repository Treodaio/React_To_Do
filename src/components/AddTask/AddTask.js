import React, { useState, useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

import '../../layouts/AddTask.css';
const minDate = new Date().toISOString().slice(0, 10);

const AddTask = () => {
  const { tasks, setTasks } = useContext(StoreContext);

  const [taskName, setTaskName] = useState('');
  const [createDate, setCreateDate] = useState('');
  const [doUntil, setDoUntil] = useState('');
  const [taskPriority, setTaskPriority] = useState(false);
  const [taskAddInfo, setTaskAddInfo] = useState('');

  const handleTaskName = (e) => setTaskName(e.target.value);
  const handleCreateDate = (e) => setCreateDate(e.target.value);
  const handleDoUntil = (e) => setDoUntil(e.target.value);
  const handleTaskPriority = (e) => setTaskPriority(e.target.checked);
  const handleTaskAddInfo = (e) => setTaskAddInfo(e.target.value);

  const addTask = (e) => {
    e.preventDefault();
    if (checkIsTaskEmpty()) return;
    const tasksCopy = [...tasks];
    let newID = generateIndex(tasksCopy.length);
    if (!newID) {
      newID = generateIndex(tasksCopy.length);
    } else {

      const newTaskArray = tasksCopy.concat({
        id: newID,
        name: taskName,
        createDate: createDate,
        doUntil: doUntil ? doUntil : createDate,
        priority: taskPriority,
        active: true,
        addInfo: taskAddInfo,
      })

      if (newTaskArray.length !== tasks.length) {
        setTasks(newTaskArray);
        clearInputs();
      }
    }
  }

  const checkIsTaskEmpty = () => { if (taskName === "" || createDate === "") return true; }

  const generateIndex = (scope) => {
    const newID = Math.floor(Math.random() * (scope + 100));
    const passTest = checkUniqueID(newID);
    if (passTest) { return false; }
    else return newID;
  }

  const checkUniqueID = (ID) => { return tasks.some(task => task.id === ID); }

  const clearInputs = () => {
    setTaskName('');
    setCreateDate('');
    setDoUntil('');
    setTaskPriority('');
    setTaskAddInfo('');
  }

  return (
    <div className="AddTask">
      <h1>Dodaj zadanie</h1>

      <form onSubmit={addTask}>

        <label htmlFor="taskIdentifier">
          <p>Nazwa zadania: </p>

          <input
            type="text"
            placeholder="Nazwa"
            id="taskIdentifier"
            name="taskName"
            value={taskName}
            onChange={handleTaskName}
          />

        </label>

        <label htmlFor="important">

          <input
            type="checkbox"
            id="important" name="taskPriority"
            checked={taskPriority}
            onChange={handleTaskPriority}
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
            value={createDate}
            onChange={handleCreateDate}
          />

        </label>

        <label htmlFor="finishDate">
          <h4>Data zakończenia zadania</h4>
          <input
            type="date"
            min={createDate}
            id="finishDate"
            name="doUntil"
            value={doUntil <= createDate ? createDate : doUntil}
            onChange={handleDoUntil}
          />
        </label>

        <label htmlFor="additionalInfo">
          <p>Dodaj informacje na temat zadania (opcjonalne)</p>

          <textarea
            placeholder="Informacje"
            id="additionalInfo"
            name="taskAddInfo"
            value={taskAddInfo}
            onChange={handleTaskAddInfo}>
          </textarea>
        </label>
        <button type="submit">Dodaj zadanie</button>
      </form>
    </div >
  );
}

export default AddTask;