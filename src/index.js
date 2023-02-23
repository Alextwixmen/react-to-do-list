import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
const lang = {
  findInput: { rus: "Поиск таски", eng: "Find Task" },
  addInput: { rus: "Добавить таску", eng: "Add Task" },
  addTaskBtn: { rus: "Добавить", eng: "Add" },
  checkBoxConfirmDelete: {
    rus: "Удалять задачу без подтверждения",
    eng: "Delete task without confirmation",
  },
  langSelectionHeader: {
    rus: "Выберите язык приложения",
    eng: "Select app language ",
  },
  engRadioBtn: {
    rus: "Английский",
    eng: "English",
  },
  rusRadioBtn: {
    rus: "Русский",
    eng: "Russian",
  },
  doneBtn: {
    rus: "Выполнено",
    eng: "Done",
  },
};
const Context = React.createContext(null);

root.render(
  <Context.Provider value={lang}>
    <App />
  </Context.Provider>
);
export default Context;
