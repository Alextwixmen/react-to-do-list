import React from "react";
import "./Settings.css";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.chekBox = false;
  }
  handleSeetingsBtn = (event) => {
    console.log("нажали на настройки", event);
  };
  handleCheckBox = (event) => {
    this.props.handleCheckBox(event.target.checked);
  };
  render() {
    return (
      <div className="settingsContainer">
        <button
          className="settingsButton"
          onClick={() => this.handleSeetingsBtn()}
        >
          <i className="fa-solid fa-gear"></i>
        </button>
        <form onClick={this.handleCheckBox}>
          <input
            type={"checkbox"}
            // checked="checked"
            // onChange={() => this.props.handleCheckBox(this.handleCheckBox())}
          />
        </form>
      </div>
    );
  }
}
export default Settings;
