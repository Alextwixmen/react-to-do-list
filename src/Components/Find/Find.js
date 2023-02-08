import React from "react";
import Context from "../..";
import "./Find.css";

class Find extends React.Component {
  constructor(props) {
    super(props);

    Find.contextType = Context;
  }

  //   cюда в пропсах приходит массив с активными тасками под props.allTasks и функция props.handleFindButton
  findHandler = (event) => {
    let taskText = event.target.value;
    this.props.handleFind(taskText);
  };

  render() {
    let appLang;

    if (this.props.whatIsLang === "rus") {
      appLang = this.context.findInput.rus;
    } else {
      appLang = this.context.findInput.eng;
    }

    return (
      <div className="FindWindow">
        <div className="findField">
          <input
            className="findInput"
            type="input"
            onChange={this.findHandler}
            placeholder={appLang}
          ></input>
        </div>
      </div>
    );
  }
}

export default Find;
