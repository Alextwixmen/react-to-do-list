import React from "react";
import "./TaskField.css";
import ActiveTasks from "../ActiveTask/ActiveTasks.js";
import InactiveTask from "../InactiveTask/InactiveTask";
class TaskField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="taskField">
        <ActiveTasks
          taskList={this.props.taksList}
          handleDelete={this.props.handleDelete}
        />
        <InactiveTask />
      </div>
    );
  }
}

export default TaskField;
