import React from "react";
import "./ModalWindow.css";
import Context from "../../index";

class ModalWindow extends React.Component {
  // static contextType = Context;
  constructor(props) {
    super(props);
    this.chekBox = false;
    ModalWindow.contextType = Context;
  }

  handleCheckBox = (e) => {
    this.props.handleCheckBox(e.target.checked);
  };

  render() {
    let isSHow = "none";

    if (this.props.isShowModal != false) {
      isSHow = "block";
    }

    let checBoxText;
    let langSelectionHeader;
    let engRadioBtn;
    let rusRadioBtn;

    if (this.props.whatIsLang === "rus") {
      checBoxText = this.context.checkBoxConfirmDelete.rus;
      langSelectionHeader = this.context.langSelectionHeader.rus;
      rusRadioBtn = this.context.rusRadioBtn.rus;
      engRadioBtn = this.context.engRadioBtn.rus;
    } else {
      checBoxText = this.context.checkBoxConfirmDelete.eng;
      langSelectionHeader = this.context.langSelectionHeader.eng;
      rusRadioBtn = this.context.rusRadioBtn.eng;
      engRadioBtn = this.context.engRadioBtn.eng;
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
  }
}
// в свойство класса contextType мы можем кинуть наш объект Context, созданный с помощью React.createContext в index.js и теперь иметь доступ к этому объекту
// через this.context. В этом мы  получаем доступ к контексту, как во всех методах жизненного цикла, так и в рендер-методе.
// ModalWindow.contextType = Context;
export { ModalWindow };
