import React from "react";
import Search from "../Search/Search";
import "./Window.css";
import TaskField from "../TaskField/TaskField";
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
    console.log("delete with", id, "state ===", this.state);
    this.setState({
      activeTasks: this.state.activeTasks.filter((elem) => elem.id != id),
    });
  };

  render() {
    console.log("внутри компонента Window со стейтом", this.state.activeTasks);
    return (
      <div className="windowField">
        <Search handleAddClick={this.handleAddClick} />
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
