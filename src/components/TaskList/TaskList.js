import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import ActiveTask from './subcomponents/ActiveTask';
import TaskCompleted from './subcomponents/TaskCompleted';

import '../../layouts/TaskList.css';

const TaskList = () => {
  const { tasks, setTasks } = useContext(StoreContext);
  const { isLoading } = useContext(StoreContext);

  const sortTasks = (type, how) => {
    if (type && how === 'name') { sortByName(true) };
    if (type && how === 'date') { sortByDate(true) };
    if (!type && how === 'name') { sortByName(false) };
    if (!type && how === 'date') { sortByDate(false) };
  }

  const sortByName = (type) => {
    let taskToSort = tasks.filter(task => task.active === type);
    const otherTasks = tasks.filter(task => task.active !== type);

    if (taskToSort.length > 2) {
      taskToSort.sort((a, b) => {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
        if (a < b) return -1;
        if (a > b) return 1;
        else return 0;
      })
    }
    const sortedTasks = taskToSort.concat(otherTasks);
    if (sortedTasks.length >= taskToSort.length) { setTasks(sortedTasks); }
  }
  
  const sortByDate = (type) => {
    let taskToSort = tasks.filter(task => task.active === type);
    const otherTasks = tasks.filter(task => task.active !== type);

    if (taskToSort.length > 2) {
      taskToSort.sort((a, b) => {
        if (a.doUntil < b.doUntil) return -1;
        if (a.doUntil > b.doUntil) return 1;
        else return 0;
      })
    }

    const sortedTasks = taskToSort.concat(otherTasks);
    if (tasks.length >= taskToSort.length) { setTasks(sortedTasks);  }
  }
  let activeTasks = null;
  let doneTasks = null;

  // program operuje na danych które nie zostały jeszcze wczytane
  if (isLoading) {
     activeTasks = tasks.map(task => {
      if (task.active) {
        return <ActiveTask key={task.id} taskInfo={task} />
      }
        else return null;
    })
     doneTasks = tasks.map(task => {
      if (!task.active) {
        return <TaskCompleted key={task.id} taskInfo={task} />
      } 
        else return null;
    })
  }

    return (
        <div className="TaskList">
            <section>
                <div className="sort">
                    <h1>Lista zadań do zrobienia</h1>
                    <button onClick={() => sortTasks(true, 'name')}> A / Z</button>
                    <button onClick={() => sortTasks(true, 'date')}> Termin</button>
                </div>
                {isLoading ? activeTasks : null}
            </section>
            <section>
                <div className="sort">
                    <h2>Zrobione zadania</h2>
                    <button onClick={() => sortTasks(false, 'name')}> A / Z</button>
                    <button onClick={() => sortTasks(false, 'date')}> Termin</button>
                </div>
                {isLoading ? doneTasks : null}
            </section>
        </div>
    );
}

export default TaskList;