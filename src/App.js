import React from "react";
import "./App.css";
import Window from "./Components/Window/Window";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Window />
      </div>
    );
  }
}

export default App;
