import React from "react";
import Context from "../..";
import "./Find.css";

class Find extends React.Component {
  constructor(props) {
    super(props);
  }
  //   cюда в пропсах приходит массив с активными тасками под props.allTasks и функция props.handleFindButton
  findHandler = (event) => {
    let taskText = event.target.value;
    this.props.handleFind(taskText);
  };
  render() {
    console.log("рендерим файнд");
    return (
      <Context.Consumer>
        {(value) => {
          let appLang;
          if (this.props.whatIsLang === "rus") {
            appLang = value.findInput.rus;
          } else {
            appLang = value.findInput.eng;
          }
          // console.log(value);
          return (
            <div className="FindWindow">
              <div className="findField">
                <input
                  className="findInput"
                  type="input"
                  onChange={this.findHandler}
                  placeholder={appLang}
                ></input>
                {/* <div className="buttonFindContainer">
            <button className="findButton btns">Find</button>
          </div> */}
              </div>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default Find;
