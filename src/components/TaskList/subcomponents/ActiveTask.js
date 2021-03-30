import React, { useContext } from 'react';
import { StoreContext } from '../../../store/StoreProvider';
const TODAY = Date.now();
const ONE_DAY = 1000 * 60 * 60 * 24;

const ActiveTask = props => {
  const { tasks, setTasks } = useContext(StoreContext);
  const { singleTask, setSingleTask } = useContext(StoreContext);
  const { setTaskAge } = useContext(StoreContext);
  const { setTimeBetween } = useContext(StoreContext);

  const findTaskID = (ID) => { return tasks.findIndex(item => item.id === ID); }

  const handleTaskInfo = (ID) => {
    const taskIndex = findTaskID(ID);
    let singleTask = null;
    if (taskIndex > -1) { singleTask = { ...tasks[taskIndex] }; }
    setSingleTask(singleTask);

    if (singleTask) {
      calcTaskAge(singleTask.createDate);
      handleDateTimestamp(singleTask.createDate, singleTask.doUntil);
    }
  }

  const calcTaskAge = (createDate) => {
    const taskInMiliseconds = Date.parse(createDate);
    if ((TODAY - taskInMiliseconds) < 0) return;

    const result = Math.floor((TODAY - taskInMiliseconds) / ONE_DAY);
    result.toString();

    if (result !== '0') { setTaskAge(result); }
    else { setTaskAge(undefined); }
  }

  const handleDateTimestamp = (createDate, endDate) => {
    const firstDay = new Date(createDate).getTime();
    const lastDay = new Date(endDate).getTime();
    let timeBetween = (lastDay - firstDay) / ONE_DAY;

    if (timeBetween === 0) { timeBetween = 'Do wykonania dzisiaj' }
    timeBetween = timeBetween.toString();
    setTimeBetween(timeBetween);
  }

  const handleDone = (ID, e) => {
    const index = findTaskID(ID);
    const tasksCopy = [...tasks];
    let element = {
      ...tasksCopy[index],
      active: false,
    };
    tasksCopy[index] = element;
    setTasks(tasksCopy);
    if (singleTask) { setSingleTask('') };
    e.stopPropagation();
  }
  return (
    <div className="ActiveTasks" onClick={() => { handleTaskInfo(props.taskInfo.id) }}>
      <h3 className={props.taskInfo.priority ? "priority" : ""}>{props.taskInfo.name} </h3>
      <h3>Termin: {props.taskInfo.doUntil}</h3>
      <button onClick={(e) => { handleDone(props.taskInfo.id, e) }}>OK</button>
    </div>
  );
}
export default ActiveTask;


