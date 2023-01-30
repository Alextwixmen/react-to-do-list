import React from "react";
import "./Settings.css";

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="settingsWrapper">
        <button
          className="settingsButton"
          onClick={() => this.props.handleSettingsButon()}
        >
          <i className="fa-solid fa-gear"></i>
        </button>
      </div>
    );
  }
}
export default Settings;
