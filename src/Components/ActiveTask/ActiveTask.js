import React from "react";
import "./ActiveTask.css";
class ActiveTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskText: this.props.taskText, arrWithTasks: [] };
    this.handleTasks = this.handleTasks.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  handleTasks() {
    if (this.props.activeTaskText != "") {
      this.state.arrWithTasks.push(
        <div className="task">
          {this.props.activeTaskText}
          <div className="taskText"></div>
          <div className="taskButtons">
            <button className="deleteTask" onClick={this.deleteTask}>
              Delete
            </button>
            <button className="doneTask">Complete</button>
          </div>
        </div>
      );
    }
  }
  deleteTask() {
    console.log("deleteTask");
    console.log(this.state);
  }
  changeState() {
    this.setState((state, prop) => {
      this.state = { taskText: this.props.taskText };
    });
  }
  render() {
    this.handleTasks();
    return (
      <div className="ActiveTaskField">
        {this.state.arrWithTasks.map((element) => element)}
      </div>
    );
  }
}

export default ActiveTask;
