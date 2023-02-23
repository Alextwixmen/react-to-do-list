import React from "react";
import "./TaskField.css";
import ActiveTasks from "../ActiveTask/ActiveTasks.js";
import InactiveTask from "../InactiveTask/InactiveTask";
class TaskField extends React.Component {
  render() {
    return (
      <div className="taskField">
        <ActiveTasks
          allTasks={this.props.allTasks}
          handleDelete={this.props.handleDelete}
          handleDoneClick={this.props.handleDoneClick}
          whatIsLang={this.props.whatIsLang}
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

export { TaskField };
