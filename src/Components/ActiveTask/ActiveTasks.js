import React from "react";
import "./ActiveTask.css";
import Context from "../..";

class ActiveTasks extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Context.Consumer>
        {(value) => {
          let doneBtn;
          if (this.props.whatIsLang === "eng") {
            doneBtn = "Done";
          } else {
            doneBtn = "Выполнено";
          }
          return (
            <div className="ActiveTaskField">
              {this.props.allTasks.map((element, index) => {
                if (element.isDone === false) {
                  return (
                    <div
                      className="task"
                      key={element.value + index}
                      style={{}}
                    >
                      <span className="taskText">{element.value}</span>
                      <button
                        onClick={() =>
                          this.props.handleDelete({ ...element }.id)
                        }
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
                          {doneBtn}
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default ActiveTasks;
