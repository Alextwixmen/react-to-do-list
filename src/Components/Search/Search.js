import React from "react";
import "./Search.css";
import Context from "../..";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { taskText: "" };
    Search.contextType = Context;
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
    let btnLang;

    let inputLang;

    if (this.props.whatIsLang === "rus") {
      btnLang = this.context.addTaskBtn.rus;
      inputLang = this.context.addInput.rus;
    } else {
      inputLang = this.context.addInput.eng;
      btnLang = this.context.addTaskBtn.eng;
    }

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
  }
}
export default Search;
