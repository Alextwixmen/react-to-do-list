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
  render() {
    return (
      <div className="searchWindow">
        <div className="searchField">
          <input
            value={this.state.taskText}
            type={"text"}
            onChange={this.handleChange}
          />
          <div className="buttons">
            <button
              className="addBtn btns"
              onClick={() => this.props.handleAddClick(this.state.taskText)}
            >
              Add
            </button>
            <button className="findBtn btns">Find</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
