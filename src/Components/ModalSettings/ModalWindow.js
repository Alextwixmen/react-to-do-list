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
            <div>
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
            </div>
            <div className="appLanguage">
              <span className="headerAppLang">Выберите язык приложения</span>
              <label className="engLabel" htmlFor="eng">
                <input
                  id="eng"
                  name="typeOfLang"
                  type={"radio"}
                  onChange={(e) => this.props.handleAppLanguage(e)}
                  className="eng"
                  // checked
                />
                English
              </label>
              <label htmlFor="rus" className="rusLabel">
                <input
                  id="rus"
                  name="typeOfLang"
                  type={"radio"}
                  onChange={(e) => this.props.handleAppLanguage(e)}
                  className="rus"
                />
                Русский
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ModalWindow;
