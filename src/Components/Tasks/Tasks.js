import React from "react";
import "./Tasks.css";

class Tasks extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="task">
        <div className="taskArea">
          <div className="taskText"></div>
          <div className="taskButtons">
            <button className="doneTask"></button>
            <button className="deleteDasks"></button>
          </div>
        </div>
      </div>
    );
  }
}
