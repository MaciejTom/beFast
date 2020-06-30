import React, { useState } from "react";

function Inputs(props) {




  return (

    <div className={props.classState.isSwitchOn ? "inputs none" : "inputs"}>
      <label>
        Czas trwania pierwszego sygnału
        <input
          type="number"
          name="first"
          value={props.first}
          onChange={props.handleChangeFirst}
        />
      </label>
      <label>
        Czas trwania drugiego sygnału
        <input
          type="number"
          name="second"
          value={props.second}
          onChange={props.handleChangeSecond}
        />
      </label>
      <label>
        Minimalny czas oczekiwania na sygnał
        <input
          type="number"
          name="timeStart"
          value={props.timeStart}
          onChange={props.handleChangeStart}
        />
      </label>

      <label>
        Maksymalny czas oczekiwania na sygnał
        <input
          type="number"
          name="timeFinish"
          value={props.timeFinish}
          onChange={props.handleChangeFinish}
        />
      </label>
      <label>
        Ilość sekwencji
        <input
          type="number"
          name="amount"
          value={props.amount}
          onChange={props.handleChangeAmount}
        />
      </label>
      <button
        onClick={props.loop}
        className={props.classPulsate.first ? "start pulsate" : "start"}
      >
        Zatwierdź czas
      </button>
      <button
        onClick={props.start}
        className={props.classPulsate.second ? "start pulsate" : "start"}
      >
        Start
      </button>
      <button
        onClick={props.stop}
        className={props.classPulsate.third ? "start pulsate" : "start"}
      >
        Stop
      </button>
    </div>


  )




};

export default Inputs;
