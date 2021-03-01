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
        addInfo: "Dodatkowa informacja na temat zadania"
      },
      {
        id: 2,
        name: "Opracować skuteczny plan nauki",
        date: "01-03-2020",
        priority: true,
        active: true,
        addInfo: "Dodatkowa informacja na temat zadania"
      },
      {
        id: 6,
        name: "Spotkanie biznesowe",
        date: "04-03-2020",
        priority: false,
        active: true,
        addInfo: "Dodatkowa informacja na temat zadania"
      },
      {
        id: 3,
        name: "Posprzątać pokój",
        date: "10-06-2018",
        priority: false,
        active: false,
        addInfo: "Dodatkowa informacja na temat zadania"
      },
      {
        id: 4,
        name: "Zrobić zakupy",
        date: "20-01-2021",
        priority: false,
        active: false,
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
  }

  addTaskInfo(e) {
    const value = e.target.value;
    const type = e.target.type;
    const name = e.target.name;

    if (type === "checkbox") {
      console.log(e);
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

        <TaskList tasks={this.state.tasks} />
        <TaskInfo />
      </div>
    )
  }
}

export default App;
