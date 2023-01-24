import React from "react";
import "./TaskField.css";
import ActiveTask from "../ActiveTask/ActiveTask.js";
import InactiveTask from "../InactiveTask/InactiveTask";
class TaskField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="taskField">
        <ActiveTask aboba={this.props.test} />
        <InactiveTask />
      </div>
    );
  }
}

export default TaskField;
