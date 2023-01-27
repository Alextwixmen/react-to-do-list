import React from "react";
import "./ActiveTask.css";
class ActiveTasks extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // this.props.activeTaskList.forEach((task) => {
    //   if (task.isHiden === true) {
    //     console.log("нужно удалить таску", task);
    //   } else {
    //     console.log("все не своих местах");
    //   }
    // });
    // console.log(
    //   "внутри компонента ActiveTasks с пропсом",
    //   this.props.activeTaskList
    // );
    // style={{ left: this.state.ofset, width: this.state.containerWidth }}
    return (
      <div className="ActiveTaskField">
        {this.props.activeTaskList.map((element, index) => {
          if (element.isDone === false) {
            return (
              <div className="task" key={element.value + index} style={{}}>
                <span className="taskText">{element.value}</span>
                <div className="taskButtons">
                  <button
                    onClick={() => this.props.handleDelete({ ...element }.id)}
                    className="taskButtons deleteTask"
                  >
                    Delete
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

export default ActiveTasks;
