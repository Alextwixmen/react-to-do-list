import React from "react";
import "./InactiveTask.css";

class InactiveTask extends React.Component {
  render() {
    return (
      <div className="InactiveTaskField">
        {this.props.allTasks.map((element, index) => {
          if (element.isDone) {
            return (
              <div className="task inactiveTask" key={element.value + index}>
                {element.value}
                <button
                  onClick={() =>
                    this.props.handleDelete({ ...element }.id, "inactive")
                  }
                  className="taskButtons deleteTask"
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
export default InactiveTask;
