import React from "react";
import "./InactiveTask.css";

class InactiveTask extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="InactiveTaskField">
        {this.props.allTasks.map((element, index) => {
          if (element.isDone) {
            return (
              <div className="task inactiveTask" key={element.value + index}>
                {element.value}
                <button
                  onClick={() => this.props.handleDelete({ ...element }.id)}
                  className="taskButtons deleteTask"
                >
                  <i class="fa fa-trash"></i>
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
