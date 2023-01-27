import React from "react";
import Search from "../Search/Search";
import "./Window.css";
import TaskField from "../TaskField/TaskField";
import Find from "../Find/Find";
function makeid(length) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTasks: [] };
  }
  handleAddClick = (taskText, state) => {
    if (taskText.trim("") != "") {
      this.setState({
        activeTasks: [
          ...this.state.activeTasks,
          {
            value: taskText,
            id: `${taskText}` + `${makeid(2)}`,
            isDone: false,
            isHiden: false,
          },
        ],
      });
    }
  };
  handleDoneClick = (id) => {
    console.log("done with id", id, "state ===", this.state);
    this.setState({
      activeTasks: this.state.activeTasks.map((elem) => {
        if (elem.id === id) {
          elem.isDone = true;
          return elem;
        } else {
          return elem;
        }
      }),
    });
  };
  handleDeleteTask = (id) => {
    this.setState({
      activeTasks: this.state.activeTasks.filter((elem) => elem.id != id),
    });
  };
  // нужно отправлять отфильтрованный стейт
  handleTaskText = (taskText) => {
    // console.log(taskText);
    function checkTaskText(task) {
      let result;
      for (let i = 0; i < taskText.length; i++) {
        if (taskText[i] === task.value[i]) {
          console.log(task.value[i], i);
          result = true;
        } else {
          result = false;
          // break;
          // return false;
        }
      }
      return [result, task];
    }
    this.state.activeTasks.forEach((task) => {
      // checkTaskText(task);
      console.log(checkTaskText(task));
    });
    console.log("стейт после цикла", this.state.activeTasks);
  };
  handleFind = (taskText) => {
    this.handleTaskText(taskText);
    //  console.log("внутри handleTaskText c текстом", taskText);
  };
  render() {
    // console.log("внутри компонента Window со стейтом", this.state.activeTasks);
    return (
      <div className="windowField">
        <Search handleAddClick={this.handleAddClick} />
        <Find
          handleFind={this.handleFind}
          activeTaskList={this.state.activeTasks}
        />
        <TaskField
          activeTaskList={this.state.activeTasks}
          handleDelete={this.handleDeleteTask}
          handleDoneClick={this.handleDoneClick}
        />
      </div>
    );
  }
}
export default Window;
