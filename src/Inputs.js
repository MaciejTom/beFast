import React, {useState, useEffect} from "react";

function Inputs({first, second, timeStart, timeFinish, start, loop, handleChangeFirst}) {




  return (
  <div className="inputs">


    <label>Ile ma być zielony
  <input type="number" name="first" value={first} onChange={handleChangeFirst} />
  </label>
  <label>Ile ma być random
  <input type="number" name="second" value={second}  />
  </label>
  <label>minimalna liczba
  <input type="number" name="timeStart" value={timeStart}  />
  </label>


  <label>maksymalna liczba sekund
  <input type="number" name="timeFinish" value={timeFinish}  />
  </label>
  <button onClick={start} className="start">Start</button>
  <button onClick={loop} className="start">Loop</button>
  </div>



)


}

export default Inputs
