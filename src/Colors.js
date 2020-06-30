import React, { useState } from "react";

function Colors(props) {

  const handleFirstCheckbox = () => {
    setCheckboxes({ ...checkboxes, first: !checkboxes.first });
  };
  const handleSecondCheckbox = () => {
    setCheckboxes({ ...checkboxes, second: !checkboxes.second });
  };
  const handleThirdCheckbox = () => {
    setCheckboxes({ ...checkboxes, third: !checkboxes.third });
  };
  const handleFourthCheckbox = () => {
    setCheckboxes({ ...checkboxes, fourth: !checkboxes.fourth });
  };
  const handleFifthCheckbox = () => {
    setCheckboxes({ ...checkboxes, fifth: !checkboxes.fifth });
  };
  const handleSixthCheckbox = () => {
    setCheckboxes({ ...checkboxes, sixth: !checkboxes.sixth });
  };

  const allCheckboxes = () => {
    if (
      checkboxes.first == false &&
      checkboxes.second == false &&
      checkboxes.third == false &&
      checkboxes.fourth == false &&
      checkboxes.fifth == false &&
      checkboxes.sixth == false
    ) {
      return false;
    } else {
      return true;
    }
  };

  const [checkboxes, setCheckboxes] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false
  });

  const styles = {
    red: { backgroundColor: "red", color: "white" },
    brown: { backgroundColor: "saddlebrown", color: "white" },
    blue: { backgroundColor: "blue", color: "white" },
    yellow: { backgroundColor: "yellow", color: "white" },
    orange: { backgroundColor: "green", color: "white" },
    purple: { background: "purple", color: "white" }
  };

  return (

    <div className={props.classState.isSwitchOn ? "colors none" : "colors"}>
      <div className="labels">
        <div>
          <label style={props.colors.includes("red") ? styles.red : {}}>
            red
            <input
              type="checkbox"
              value="red"
              onClick={props.handleWhoGive}
              defaultChecked={true}
              onChange={handleFirstCheckbox}
            />
          </label>
          <label style={props.colors.includes("saddlebrown") ? styles.brown : {}}>
            brown
            <input
              type="checkbox"
              value="saddlebrown"
              onClick={props.handleWhoGive}
              onChange={handleSecondCheckbox}
            />
          </label>
        </div>
        <div>
          <label style={props.colors.includes("blue") ? styles.blue : {}}>
            blue
            <input
              type="checkbox"
              value="blue"
              onClick={props.handleWhoGive}
              onChange={handleThirdCheckbox}
            />
          </label>

          <label style={props.colors.includes("green") ? styles.orange : {}}>
            green
            <input
              type="checkbox"
              value="green"
              onClick={props.handleWhoGive}
              onChange={handleFourthCheckbox}
            />
          </label>
        </div>
        <div>
          <label style={props.colors.includes("purple") ? styles.purple : {}}>
            purple
            <input
              type="checkbox"
              value="purple"
              onClick={props.handleWhoGive}
              onChange={handleFifthCheckbox}
            />
          </label>
          <label style={props.colors.includes("yellow") ? styles.yellow : {}}>
            yellow
            <input
              type="checkbox"
              value="yellow"
              onClick={props.handleWhoGive}
              onChange={handleSixthCheckbox}
            />
          </label>
        </div>
      </div>
      <span className={allCheckboxes() ? "noChecked noneVis" : "noChecked"}>
        Nie zaznaczono żadnego koloru!
      </span>
      <div className={props.classState.isSwitchOn ? "numbers none" : "numbers"}>
        <span>
          {props.getMinutes()}:{props.getSeconds()}
        </span>
        <span>{props.number}</span>
      </div>
    </div>


  )




};

export default Colors;
