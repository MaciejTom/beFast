import React, { useState } from "react";
import Inputs from './Inputs'
import Box from './Box'
import Colors from './Colors'

function App() {

  const [div, setDiv] = useState("white");
  const [first, setFirst] = useState(1);
  const [second, setSecond] = useState(1);
  const [timeStart, setTimeStart] = useState(0);
  const [timeFinish, setTimeFinish] = useState(12);
  const [arr, setArr] = useState();
  const [amount, setAmount] = useState(100);
  const [number, setNumber] = useState();
  const [colors, setColors] = useState(["red"]);
  const [classState, setClassState] = useState({ isSwitchOn: false });
  const [classPulsate, setClassPulsate] = useState({
    first: true,
    second: false,
    third: false
  });
  const [textInDiv, setTextInDiv] = useState(true);
  const [click, setClick] = useState(true);


  ///////////////////////////CHECKBOXES FUNCTIONS



  const setGreenColor = arr => {
    setDiv("green");
    console.log("ZIELONY");
  };

  const setColor = () => {
    setDiv(colors[Math.floor(Math.random() * (colors.length - 0)) + 0]);
    console.log("KOLOR");
  };

  const setWhite = () => {
    setDiv("white");
    setNumber(prev => prev - 1);
    console.log("BIALY");
  };

  const handleChangeFirst = e => {
    setFirst(e.target.value);
  };

  const handleChangeSecond = e => {
    setSecond(e.target.value);
    console.log("second");
  };

  const handleChangeStart = e => {
    setTimeStart(e.target.value);
    console.log("third");
  };

  const handleChangeFinish = e => {
    setTimeFinish(e.target.value);
    console.log("fourth");
  };

  const handleChangeAmount = e => {
    setAmount(e.target.value);
  };

  const handleWhoGive = event => {
    if (colors.includes(event.target.value)) {
      setColors(colors.filter(el => el !== event.target.value));
      return;
    }
    setColors([...colors, event.target.value]);
  };



  const [seconds, setSeconds] = useState({ seconds: 0 });

  const getSeconds = () => {
    return ("0" + (seconds.seconds % 60)).slice(-2);
  };
  const getMinutes = () => {
    return Math.floor(seconds.seconds / 60);
  };

  function loop() {
    const x = parseInt(amount);
    let array = [];
    let y = 0;
    let random =
      (Math.floor(
        Math.random() * (parseInt(timeFinish) - parseInt(timeStart) + 1)
      ) +
        parseInt(timeStart)) *
      1000;

    y = random + y;
    array.push(y);
    for (let i = 0; i <= x - 2; i++) {
      random =
        (Math.floor(
          Math.random() * (parseInt(timeFinish) - parseInt(timeStart) + 1)
        ) +
          parseInt(timeStart) +
          parseInt(first) +
          parseInt(second)) *
        1000;

      console.log(y);

      y = random + y;

      array.push(y);
    }
    console.log(array);
    y = 0;
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    random = 0;
    setArr(array);
    array = [];

    setClassPulsate({
      first: false,
      second: true,
      third: false
    });
  }

  function start() {
    if (arr === undefined) {
      alert("Nie potwierdzono czasu!!!");
    } else {
      setNumber(amount);
      console.log(arr);
      console.log("start");

      arr.map(el => {
        setTimeout(setGreenColor, el + timeStart * 1000);
        setTimeout(setColor, el + first * 1000 + timeStart * 1000);
        setTimeout(
          setWhite,
          el + first * 1000 + second * 1000 + timeStart * 1000
        );
      });

      setClassPulsate({
        first: false,
        second: false,
        third: true
      });
      if (click) {
        setTextInDiv(false);
        setTimeout(() => {
          setTextInDiv(true);
        }, 4900);
      }
      setClick(false);

      console.log(seconds.seconds);
      console.log(
        setInterval(function() {
          setSeconds(prev => ({ seconds: prev.seconds + 1 }));
        }, 1000)
      );
    }
  }

  function stop() {
    var highestTimeoutId = setTimeout(";");
    for (var i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
    }
    setNumber();
    setDiv("white");
    setClassPulsate({
      first: true,
      second: false,
      third: false
    });
    setSeconds({ seconds: 0 });
  }
  function big() {
    setClassState({ isSwitchOn: !classState.isSwitchOn });

  }

  return (
    <div className="App" style={ classState.isSwitchOn ? { margin:0} : {}}>

      <Inputs classState={classState} start={start} stop={stop} first={first} handleChangeFirst={handleChangeFirst} second={second} handleChangeSecond={handleChangeSecond} timeStart={timeStart} handleChangeStart={handleChangeStart} timeFinish={timeFinish} handleChangeFinish={handleChangeFinish} amount={amount} handleChangeAmount={handleChangeAmount} loop={loop} classPulsate={classPulsate}/>
      <Box div={div} classState={classState} big={big} number={number} getMinutes={getMinutes} getSeconds={getSeconds} textInDiv={textInDiv}/>
      <Colors number={number} classState={classState} colors={colors} handleWhoGive={handleWhoGive} getMinutes={getMinutes} getSeconds={getSeconds}/>

    </div>
  );
}

export default App;
