import React from "react";
import "./TaskField.css";
import ActiveTasks from "../ActiveTask/ActiveTasks.js";
import InactiveTask from "../InactiveTask/InactiveTask";
class TaskField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(
      "внутри компонента TaskField с пропсом",
      this.props.activeTaskList
    );
    return (
      <div className="taskField">
        <ActiveTasks
          activeTaskList={this.props.activeTaskList}
          handleDelete={this.props.handleDelete}
          handleDoneClick={this.props.handleDoneClick}
        />
        <InactiveTask
          activeTaskList={this.props.activeTaskList}
          handleDelete={this.props.handleDelete}
          handleDoneClick={this.props.handleDoneClick}
        />
      </div>
    );
  }
}

export default TaskField;
