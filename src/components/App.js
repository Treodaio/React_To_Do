import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskInfo from './TaskInfo';
import '../layouts/App.css';

const TODAY = Date.now();
const ONE_DAY = 1000 * 60 * 60 * 24;

class App extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        name: "Podlać kwiatki",
        createDate: "2021-03-01",
        doUntil: "2021-03-05",
        priority: false,
        active: true,
        addInfo: "Szybko zanim uschną"
      },
      {
        id: 2,
        name: "Opracować skuteczny plan nauki",
        createDate: "2020-01-01",
        doUntil: "2021-03-06",
        priority: true,
        active: true,
        addInfo: "Aby uczyć się szybciej niż komputer"
      },
      {
        id: 6,
        name: "Spotkanie biznesowe",
        createDate: "2020-03-04",
        doUntil: "2020-03-07",
        priority: false,
        active: true,
        addInfo: "React + Node + CSS + Express."
      },
      {
        id: 3,
        name: "Posprzątać pokój",
        createDate: "2018-06-10",
        doUntil: "2021-03-08",
        priority: false,
        active: false,
        addInfo: "Potrzebne będzie spore zaangażowanie sprzątającego"
      },
      {
        id: 4,
        name: "Zrobić zakupy",
        createDate: "2021-06-02",
        doUntil: "2021-06-09",
        priority: false,
        active: true,
        addInfo: "Ziemniaki pomidor papryka seler czosnek cebula woda ogórek sałata marchewka",
      },
      {
        id: 5,
        name: "Pracować nad nowym projektem",
        createDate: "2021-02-03",
        doUntil: "2021-03-10",
        priority: true,
        active: true,
        addInfo: "Projekt React",
      },
    ],

    taskName: "",
    createDate: "",
    taskPriority: false,
    taskAddInfo: "",
    doUntil: "",

    singleTask: false,
    taskAge: undefined,
    timeBetween: undefined,
  }

  addTaskInfo(e) {
    const { value, type, name } = e.target;

    if (type === "checkbox") {
      this.setState({
        [name]: e.target.checked,
      })
    }

    else {
      this.setState({
        [name]: value,
      })
    }
  }

  addTask(e) {
    e.preventDefault();
    if (this.checkIsTaskEmpty()) return;

    const tasksCopy = [...this.state.tasks];
    let newID = this.generateIndex(tasksCopy.length);

    if (!newID) {
      newID = this.generateIndex(tasksCopy.length);
    } else {
      const newTaskArray = tasksCopy.concat({
        id: newID,
        name: this.state.taskName,
        createDate: this.state.createDate,
        doUntil: this.state.doUntil,
        priority: this.state.taskPriority,
        active: true,
        addInfo: this.state.taskAddInfo,
      })

      if (newTaskArray.length !== this.state.tasks.length) {
        this.setState({
          tasks: newTaskArray,
        })
        this.clearInputs();
      }
    }
  }

  checkIsTaskEmpty() { if (this.state.taskName === "" || this.state.createDate === "") return true; }

  generateIndex(scope) {
    const newID = Math.floor(Math.random() * (scope + 100));
    const passTest = this.checkUniqueID(newID);
    if (passTest) { return false; }
    else return newID;
  }

  checkUniqueID(ID) { return this.state.tasks.some(task => task.id === ID); }

  clearInputs() { this.setState({ taskName: "", createDate: "", doUntil: "", taskPriority: false, taskAddInfo: "", }) }

  handleRemove(ID) {
    const tasksCopy = [...this.state.tasks];
    const properLength = this.state.tasks.length - 1;
    const index = this.findTaskID(ID);

    tasksCopy.splice(index, 1);

    if (tasksCopy.length === properLength) { this.setState({ tasks: tasksCopy, }) }
  }

  handleTaskInfo(ID) {
    const taskIndex = this.findTaskID(ID);
    let singleTask = null;

    if (taskIndex > -1) { singleTask = { ...this.state.tasks[taskIndex] }; }

    this.setState({
      singleTask,
    })

    if (singleTask) {
      this.calcTaskAge(singleTask.createDate);
      this.handleDateTimestamp(singleTask.createDate, singleTask.doUntil);
    }
  }

  calcTaskAge(createDate) {
    const taskInMiliseconds = Date.parse(createDate);
    const result = Math.floor((TODAY - taskInMiliseconds) / ONE_DAY);
    result.toString();

    if (result > 0) {
      this.setState({ taskAge: result, })
    } else { this.setState({ taskAge: undefined, }) }
  }

  handleDateTimestamp(createDate, endDate) {
    const firstDay = new Date(createDate).getTime();
    const lastDay = new Date(endDate).getTime();
    let timeBetween = (lastDay - firstDay) / ONE_DAY;

    if (timeBetween === 0) { timeBetween = 'Do wykonania dzisiaj' }
    timeBetween = timeBetween.toString();
    this.setState({ timeBetween });
  }

  handleDone(ID, e) {
    const index = this.findTaskID(ID);
    const tasks = [...this.state.tasks];
    let element = {
      ...this.state.tasks[index],
      active: false,
    };
    tasks[index] = element;

    this.setState({
      tasks,
    })

    if (this.state.singleTask) {
      this.setState({
        singleTask: "",
      })
    }
    e.stopPropagation();
  }

  findTaskID(ID) { return this.state.tasks.findIndex(item => item.id === ID); }

  render() {
    const { taskName, createDate, doUntil, taskPriority,
      taskAddInfo, singleTask, taskAge, timeBetween } = this.state;

    return (
      <div className="App">
        <AddTask
          addTask={this.addTask.bind(this)}
          addTaskInfo={this.addTaskInfo.bind(this)}

          name={taskName}
          createDate={createDate}
          doUntil={doUntil}
          priority={taskPriority}
          addInfo={taskAddInfo}
        />

        <TaskList
          tasks={this.state.tasks}
          endTask={this.handleDone.bind(this)}
          removeTask={this.handleRemove.bind(this)}
          handleTaskInfo={this.handleTaskInfo.bind(this)}
        />
        <TaskInfo
          task={singleTask}
          taskAge={taskAge}
          timeToTask={timeBetween}
        />
      </div>
    )
  }
}

export default App;

