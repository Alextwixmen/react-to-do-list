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
          allTasks={this.props.allTasks}
          handleDelete={this.props.handleDelete}
          handleDoneClick={this.props.handleDoneClick}
        />
        <InactiveTask
          allTasks={this.props.allTasks}
          handleDelete={this.props.handleDelete}
          handleDoneClick={this.props.handleDoneClick}
        />
      </div>
    );
  }
}

export default TaskField;
