import React from "react";
import Search from "../Search/Search";
import "./Window.css";
import TaskField from "../TaskField/TaskField";
class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskInfo: "" };
  }
  handleClick = (taskText) => {
    this.setState((state, props) => ({
      taskInfo: taskText,
    }));
  };

  render() {
    return (
      <div className="windowField">
        <Search handleClick={this.handleClick} />
        <TaskField taskText={this.state.taskInfo} />
      </div>
    );
  }
}
export default Window;
