import React from "react";
import "./InactiveTask.css";

class InactiveTask extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("InactiveTask c пропсом", this.props.activeTaskList);
    return (
      <div className="InactiveTaskField">
        {this.props.activeTaskList.map((element, index) => {
          if (element.isDone) {
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
                  <button
                    onClick={() =>
                      this.props.handleDoneClick({ ...element }.id)
                    }
                    className="taskButtons doneTask"
                  >
                    Done
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
export default InactiveTask;
