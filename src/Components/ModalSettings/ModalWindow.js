import React from "react";
import "./ModalWindow.css";
import Context from "../..";

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
    return (
      <Context.Consumer>
        {(value) => {
          let isSHow = "none";
          if (this.props.isShowModal != false) {
            isSHow = "block";
          }
          let checBoxText;
          let langSelectionHeader;
          let engRadioBtn;
          let rusRadioBtn;
          if (this.props.whatIsLang === "rus") {
            checBoxText = value.checkBoxConfirmDelete.rus;
            langSelectionHeader = value.langSelectionHeader.rus;
            rusRadioBtn = value.rusRadioBtn.rus;
            engRadioBtn = value.engRadioBtn.rus;
          } else {
            checBoxText = value.checkBoxConfirmDelete.eng;
            langSelectionHeader = value.langSelectionHeader.eng;
            rusRadioBtn = value.rusRadioBtn.eng;
            engRadioBtn = value.engRadioBtn.eng;
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
                      {checBoxText}
                    </label>
                  </div>
                  <div className="appLanguage">
                    <span className="headerAppLang">{langSelectionHeader}</span>
                    <label className="engLabel" htmlFor="eng">
                      <input
                        id="eng"
                        name="typeOfLang"
                        type={"radio"}
                        onChange={(e) => this.props.handleAppLanguage(e)}
                        className="eng"
                        // checked
                      />
                      {engRadioBtn}
                    </label>
                    <label htmlFor="rus" className="rusLabel">
                      <input
                        id="rus"
                        name="typeOfLang"
                        type={"radio"}
                        onChange={(e) => this.props.handleAppLanguage(e)}
                        className="rus"
                      />
                      {rusRadioBtn}
                    </label>
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}
export default ModalWindow;
