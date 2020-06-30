import React, { useState } from "react";

function Box(props) {

  


  return (

    <div
      style={{ backgroundColor: props.div }}
      className={props.classState.isSwitchOn ? "box big" : "box"}
      onClick={props.big}
    >
      {props.classState.isSwitchOn ? (
        <div>
          <span>{props.number}</span>
          <span>
            {" "}
            {props.getMinutes()}:{props.getSeconds()}
          </span>
        </div>
      ) : null}
      {}
      {!props.classState.isSwitchOn ? (
        <span className={props.textInDiv ? "pulsateText none" : "pulsateText"}>
          Kliknij aby wejść w tryb pełnoekranowy!
        </span>
      ) : null}{" "}
    </div>


  )




};

export default Box;
