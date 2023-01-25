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
    this.state = { arrWithTasks: [] };
  }
  handleClick = (taskText) => {
    this.setState({
      arrWithTasks: [
        ...this.state.arrWithTasks,
        { value: taskText, id: `${taskText}` + `${makeid(2)}` },
      ],
    });
  };
  deleteTask = (id) => {
    this.setState({
      arrWithTasks: this.state.arrWithTasks.filter((elem) => elem.id != id),
    });
  };

  render() {
    return (
      <div className="windowField">
        <Search handleClick={this.handleClick} />
        <TaskField
          taksList={this.state.arrWithTasks}
          handleDelete={this.deleteTask}
        />
      </div>
    );
  }
}
export default Window;
