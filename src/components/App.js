import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskInfo from './TaskInfo';
import '../layouts/App.css';

class App extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        name: "Podlać kwiatki",
        date: "19-01-2021",
        priority: false,
        active: true,
        addInfo: "Szybko zanim uschną"
      },
      {
        id: 2,
        name: "Opracować skuteczny plan nauki",
        date: "01-03-2020",
        priority: true,
        active: true,
        addInfo: "Aby uczyć się szybciej niż komputer"
      },
      {
        id: 6,
        name: "Spotkanie biznesowe",
        date: "04-03-2020",
        priority: false,
        active: true,
        addInfo: "React + Node + CSS + Express."
      },
      {
        id: 3,
        name: "Posprzątać pokój",
        date: "10-06-2018",
        priority: false,
        active: false,
        addInfo: "Potrzebne będzie spore zaangażowanie sprzątającego"
      },
      {
        id: 4,
        name: "Zrobić zakupy",
        date: "20-01-2021",
        priority: false,
        active: true,
        addInfo: "Ziemniaki pomidor papryka seler czosnek cebula woda ogórek sałata marchewka",
      },
      {
        id: 5,
        name: "Pracować nad nowym projektem",
        date: "21-03-2021",
        priority: true,
        active: true,
        addInfo: "Projekt React",
      },
    ],
    taskName: "",
    taskDate: "",
    taskPriority: false,
    taskAddInfo: "",
    singleTask: false,
  }


  addTaskInfo(e) {
    const value = e.target.value;
    const type = e.target.type;
    const name = e.target.name;

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
    if (this.checkCorrectAdd()) return;

    const tasksCopy = [...this.state.tasks];
    let newID = this.generateIndex(tasksCopy.length);

    if (!newID) {
      newID = this.generateIndex(tasksCopy.length);
    } else {
      const newTaskArray = tasksCopy.concat({
        id: newID,
        name: this.state.taskName,
        date: this.state.taskDate,
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

  checkCorrectAdd() { if (this.state.taskName === "" || this.state.taskDate === "") return true; }

  generateIndex(scope) {
    const newID = Math.floor(Math.random() * (scope + 100));
    const passTest = this.checkUniqueID(newID);
    if (passTest) { return false; }
    else return newID;
  }

  checkUniqueID(ID) { return this.state.tasks.some(task => task.id === ID); }

  clearInputs() { this.setState({ taskName: "", taskDate: "", taskPriority: false, taskAddInfo: "", }) }

  handleRemove(ID) {
    const tasksCopy = [...this.state.tasks];
    const properLength = this.state.tasks.length - 1;
    const index = this.findItem(ID);

    tasksCopy.splice(index, 1);

    if (tasksCopy.length === properLength) {
      this.setState({
        tasks: tasksCopy,
      })
    }
  }

  handleChangeTask(ID) {
    const taskIndex = this.findItem(ID);
    let singleTask = null;

    if (taskIndex > -1) {
      singleTask = { ...this.state.tasks[taskIndex] };
    }
    this.setState({
      singleTask,
    })
  }


  handleDone(ID, e) {
    const index = this.findItem(ID);
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

  findItem(ID) { return this.state.tasks.findIndex(item => item.id === ID); }

  render() {
    return (
      <div className="App">
        <AddTask
          addTask={this.addTask.bind(this)}
          addTaskInfo={this.addTaskInfo.bind(this)}

          name={this.state.taskName}
          date={this.state.taskDate}
          priority={this.state.taskPriority}
          addInfo={this.state.taskAddInfo}
        />

        <TaskList
          tasks={this.state.tasks}
          endTask={this.handleDone.bind(this)}
          removeTask={this.handleRemove.bind(this)}
          changeTask={this.handleChangeTask.bind(this)}
        />
        <TaskInfo task={this.state.singleTask} />
      </div>
    )
  }
}

export default App;
