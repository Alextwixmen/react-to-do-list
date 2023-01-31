import React from "react";
import "./App.css";
import Window from "./Components/Window/Window";
import Context from ".";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Context.Consumer>
        {(value) => (
          <div className="App">
            <Window />
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default App;
