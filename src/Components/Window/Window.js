import React from "react";
import { ModalWindow } from "../ModalSettings/ModalWindow";
import Search from "../Search/Search";
import "./Window.css";
import { TaskField } from "../TaskField/TaskField";
import Find from "../Find/Find";
import Settings from "../Settings/Settings";
import { ErrorBoundary } from "../ErrorBoundaryComponent/ErrorBoundaryComponent";

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
      appLang: "eng",
    };
    this.filteredArr = undefined;
  }

  onClickOutsideHandler = (e) => {
    if (
      e.target.closest(".modalWindow") ||
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

  handleDeleteTask = (id, isInactive) => {
    let textOfConfirmation;

    if (this.state.appLang === "rus") {
      textOfConfirmation = "Разрешить удаление?";
    } else {
      textOfConfirmation = "Allow deletion of task?";
    }

    if (this.state.delWithoutConfirm || isInactive) {
      this.setState({
        allTasks: this.state.allTasks.filter((elem) => elem.id != id),
      });
    } else {
      if (window.confirm(textOfConfirmation)) {
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
  };

  handleAppLanguage = (e) => {
    if (e.target.className === "rus") {
      this.setState({ appLang: "rus" });
    } else {
      this.setState({ appLang: "eng" });
    }
  };
  render() {
    let allTasks = this.state.allTasks;

    if (this.state.filterText != "") {
      allTasks = this.filteredArr;
    }

    return (
      <div className="windowField">
        <ErrorBoundary>
          <Search
            handleAddClick={this.handleAddClick}
            whatIsLang={this.state.appLang}
          />
        </ErrorBoundary>

        <Find
          handleFind={this.handleFind}
          allTasks={this.state.allTasks}
          whatIsLang={this.state.appLang}
        />
        <TaskField
          allTasks={allTasks}
          handleDelete={this.handleDeleteTask}
          handleDoneClick={this.handleDoneClick}
          whatIsLang={this.state.appLang}
        />
        <ModalWindow
          handleCheckBox={this.handleCheckBox}
          isShowModal={this.state.isShowModal}
          handleAppLanguage={this.handleAppLanguage}
          whatIsLang={this.state.appLang}
        />
        <Settings handleSettingsButon={this.handleSettingsButon} />
      </div>
    );
  }
}
export { Window };
