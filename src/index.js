import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Context = React.createContext(null);
const lang = {
  findInput: { rus: "Поиск таски", eng: "Find Task" },
  addInput: { rus: "Добавить таску", eng: "Add Task" },
  addTaskBtn: { rus: "Добавить", eng: "Add" },
};
root.render(
  <Context.Provider value={lang}>
    <App />
  </Context.Provider>
);
export default Context;
