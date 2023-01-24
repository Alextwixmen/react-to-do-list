import React from "react";
import "./ActiveTask.css";
class ActiveTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskText: this.props.taskText };
  }
  setState() {}
  changeState() {
    this.setState((state, prop) => {
      this.state = { taskText: this.props.taskText };
    });
  }
  render() {
    return <div className="ActiveTaskField"></div>;
  }
}

export default ActiveTask;
