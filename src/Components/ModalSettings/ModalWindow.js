import React from "react";
import "./ModalWindow.css";

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.chekBox = false;
  }
  // handleSeetingsBtn = (event) => {
  //   console.log("нажали на настройки", event);
  // };
  handleCheckBox = (e) => {
    this.props.handleCheckBox(e.target.checked);
  };
  render() {
    let isSHow = "none";
    if (this.props.isShowModal != false) {
      isSHow = "block";
    }
    return (
      <div className="settingsContainer" style={{ display: isSHow }}>
        <div className="modalWindow">
          <form className="modalForm">
            <input
              id="checBox"
              name="checBox"
              type={"checkbox"}
              onChange={(e) => this.handleCheckBox(e)}
              className="checkBox"
            />
            <label className="labelForSettings" htmlFor="checBox">
              Удалять задачу без подтверждения
            </label>
          </form>
        </div>
      </div>
    );
  }
}
export default ModalWindow;
