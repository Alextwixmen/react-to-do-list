import React from "react";
import "./Search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { taskText: "" };
  }

  handleChange(event) {
    this.setState((prev) => ({ taskText: event.target.value }));
  }
  handleClick = () => {
    this.props.handleAddClick(this.state.taskText);
    this.setState({ taskText: "" });
  };
  render() {
    return (
      <div className="searchWindow">
        <form className="searchField">
          <input
            className="inputSearch"
            value={this.state.taskText}
            type="input"
            onChange={this.handleChange}
            placeholder="Add Task"
            name="task"
            id="task"
            required
          />
          <div className="buttons">
            <button className="addBtn btns" onClick={() => this.handleClick()}>
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Search;
