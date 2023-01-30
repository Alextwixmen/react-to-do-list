import React from "react";
import Search from "../Search/Search";
import "./Window.css";
import TaskField from "../TaskField/TaskField";
import Find from "../Find/Find";
import ModalWindow from "../ModalSettings/ModalWindow";
import Settings from "../Settings/Settings";
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
    this.state = {
      allTasks: [],
      filterText: "",
      delWithoutConfirm: false,
      isShowModal: false,
    };
    this.filteredArr = undefined;
  }
  onClickOutsideHandler = (e) => {
    if (
      e.target.className === "labelForSettings" ||
      e.target.className === "modalForm" ||
      e.target.className === "checkBox" ||
      e.target.className === "modalWindow" ||
      e.target.className === "fa-solid fa-gear"
    ) {
    } else {
      this.setState({ isShowModal: false });
    }
  };
  componentDidMount() {
    window.addEventListener("click", this.onClickOutsideHandler);
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
    if (this.state.delWithoutConfirm) {
      this.setState({
        allTasks: this.state.allTasks.filter((elem) => elem.id != id),
      });
    } else {
      if (window.confirm("Разрешить удаление?")) {
        this.setState({
          allTasks: this.state.allTasks.filter((elem) => elem.id != id),
        });
      }
    }
  };

  // нужно отправлять отфильтрованный стейт
  handleFind = (taskText) => {
    this.setState({ filterText: taskText });
    if (taskText != "") {
      let findTextWithoutSpaces = taskText.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
      this.filteredArr = this.state.allTasks.filter((task) => {
        if (
          task.value
            .replace(/^\s+|\s+$|\s+(?=\s)/g, "")
            .toLowerCase()
            .includes(findTextWithoutSpaces.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
    }
  };
  handleCheckBox = (checkBoxValue) => {
    this.setState({ delWithoutConfirm: checkBoxValue });
  };
  handleSettingsButon = () => {
    this.setState({ isShowModal: !this.state.isShowModal });
    // console.log(this.state.isShowModal);
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
        <ModalWindow
          handleCheckBox={this.handleCheckBox}
          isShowModal={this.state.isShowModal}
        />
        <Settings handleSettingsButon={this.handleSettingsButon} />
      </div>
    );
  }
}
export default Window;
