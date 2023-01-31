import React from "react";
import "./Search.css";
import Context from "../..";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { taskText: "" };
  }

  handleChange(event) {
    this.setState((prev) => ({ taskText: event.target.value }));
  }
  handleClick = (event) => {
    event.preventDefault();
    this.props.handleAddClick(this.state.taskText);
    this.setState({ taskText: "" });
  };
  render() {
    // console.log(this.props.whatIsLang);
    return (
      <Context.Consumer>
        {(value) => {
          let btnLang;
          let inputLang;
          if (this.props.whatIsLang === "rus") {
            btnLang = value.addTaskBtn.rus;
            inputLang = value.addInput.rus;
          } else {
            inputLang = value.addInput.eng;
            btnLang = value.addTaskBtn.eng;
          }
          // console.log(appLang);
          return (
            <div className="searchWindow">
              <form className="searchField">
                <input
                  className="inputSearch"
                  value={this.state.taskText}
                  type="input"
                  onChange={this.handleChange}
                  placeholder={inputLang}
                  name="task"
                  id="task"
                />
                <div className="buttons">
                  <button className="addBtn btns" onClick={this.handleClick}>
                    {btnLang}
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}
export default Search;
