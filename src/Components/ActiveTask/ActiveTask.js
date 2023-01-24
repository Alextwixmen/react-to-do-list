import React from "react";
import "./ActiveTask.css";
class ActiveTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskText: this.props.taskText };
  }

  changeState() {
    this.setState((state, prop) => {
      this.state = { taskText: this.props.taskText };
    });
  }

  render() {
    console.log(this.props.aboba);
    return <div className="ActiveTaskField">{this.props.aboba}</div>;
  }
}

export default ActiveTask;
