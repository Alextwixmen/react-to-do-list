import React from "react";
import Search from "../Search/Search";
import "./Window.css";
import TaskField from "../TaskField/TaskField";
import Find from "../Find/Find";
function makeid(length) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allTasks: [], filterText: "" };
    this.filteredArr = null;
  }
  handleAddClick = (taskText, state) => {
    if (taskText.trim("") != "") {
      this.setState({
        allTasks: [
          ...this.state.allTasks,
          {
            value: taskText,
            id: `${taskText}` + `${makeid(2)}`,
            isDone: false,
            isSearch: false,
          },
        ],
      });
    }
  };
  handleDoneClick = (id) => {
    this.setState({
      allTasks: this.state.allTasks.map((elem) => {
        if (elem.id === id) {
          elem.isDone = true;
          return elem;
        } else {
          return elem;
        }
      }),
    });
  };
  handleDeleteTask = (id) => {
    this.setState({
      allTasks: this.state.allTasks.filter((elem) => elem.id != id),
    });
  };

  // нужно отправлять отфильтрованный стейт
  handleFind = (taskText) => {
    this.setState({ filterText: taskText });
    if (taskText != "") {
      this.filteredArr = this.state.allTasks.filter((task) => {
        if (task.value.includes(taskText)) {
          return true;
        } else {
          return false;
        }
      });
    }

    // console.log("внутри handleFind с ", this.state);
    // console.log(this.filteredArr);
  };
  render() {
    let allTasks = this.state.allTasks;
    if (this.state.filterText != "") {
      allTasks = this.filteredArr;
    }
    return (
      <div className="windowField">
        <Search handleAddClick={this.handleAddClick} />
        <Find handleFind={this.handleFind} allTasks={this.state.allTasks} />
        <TaskField
          allTasks={allTasks}
          handleDelete={this.handleDeleteTask}
          handleDoneClick={this.handleDoneClick}
        />
      </div>
    );

    // console.log("внутри компонента Window со стейтом", this.state.activeTasks);
  }
}
export default Window;
