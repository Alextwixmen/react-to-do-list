import React from "react";
import "./ActiveTask.css";
class ActiveTasks extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // this.props.taskList - массив с объектами (тасками)
    // console.log("taskList in active", this.props.taskList);
    return (
      <div className="ActiveTaskField">
        {this.props.taskList.map((element, index) => {
          return (
            <div className="task" key={element.value + index}>
              {element.value}
              <div className="taskButtons">
                <button
                  onClick={() => this.props.handleDelete({ ...element }.id)}
                  className="taskButtons deleteTask"
                >
                  Del
                </button>
                <button className="taskButtons doneTask">Done</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ActiveTasks;
