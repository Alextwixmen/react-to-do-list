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
    console.log(this.state);
    this.setState((state, props) => ({
      taskInfo: taskText,
    }));
    this.setState({ taskInfo: taskText });
  };
  componentDidMount() {}
  render() {
    console.log("state in parent", this.state);
    return (
      <div className="windowField">
        <Search handleClick={this.handleClick} />
        <TaskField />
      </div>
    );
  }
}
export default Window;
