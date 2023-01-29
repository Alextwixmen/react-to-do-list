import React from "react";
import "./Find.css";

class Find extends React.Component {
  constructor(props) {
    super(props);
  }
  //   cюда в пропсах приходит массив с активными тасками под props.allTasks и функция props.handleFindButton
  findHandler = (event) => {
    // console.log("state родителя состоит из", this.props.allTasks);
    let taskText = event.target.value;
    this.props.handleFind(taskText);
  };
  render() {
    return (
      <div className="FindWindow">
        <div className="findField">
          <input
            className="findInput"
            // value={this.state.taskText}
            type="input"
            onChange={this.findHandler}
            placeholder="Find Task"
          ></input>
          <div className="buttonFindContainer">
            <button className="findButton btns">Find</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Find;
