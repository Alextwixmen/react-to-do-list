import React from "react";
import "./ActiveTask.css";
class ActiveTasks extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log("ща будет рендер в activeTasks с пропсами", this.props);

    return (
      <div className="ActiveTaskField">
        {this.props.allTasks.map((element, index) => {
          if (element.isDone === false) {
            return (
              <div className="task" key={element.value + index} style={{}}>
                <span className="taskText">{element.value}</span>
                <button
                  onClick={() => this.props.handleDelete({ ...element }.id)}
                  className="taskButtons deleteTask"
                >
                  <i className="fa fa-trash"></i>
                </button>
                <div className="taskButtons">
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

export default ActiveTasks;
