import React, {useState, useEffect} from "react";


function App() {

  useEffect(() => {
    const divColor = document.querySelector('.box')
    console.log(divColor)
  })



  const [div, setDiv] = useState("white")
  const [first, setFirst] = useState(1)
  const [second, setSecond] = useState(1)
  const [timeStart, setTimeStart] = useState(0);
  const [timeFinish, setTimeFinish] = useState(12);
  const [arr, setArr] = useState();

  const [amount, setAmount] = useState(100);
  const [number, setNumber] = useState()
  const [colors, setColors] = useState(["red"]);
  const [classState, setClassState] = useState({isSwitchOn: false})

  console.log(colors)
  console.log(colors.length)

const setGreenColor = (arr) => {
  setDiv("green")
  console.log("ZIELONY")


}
const setColor = () => {

  setDiv(colors[Math.floor(Math.random() * (colors.length - 0))+0])
  console.log("KOLOR")
}
const setWhite = () => {
  setDiv("white")
  setNumber(prev => prev - 1)

  console.log("BIALY")
}


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

  const styles = {
    red: { backgroundColor: "red" },
    brown: { backgroundColor: "brown" },
    blue: { backgroundColor: "blue" },
    yellow: { backgroundColor: "yellow" },
    orange: { backgroundColor: "orange" }
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
  for (let i = 0; i <= x-2; i++) {
    random = (Math.floor(Math.random() * (parseInt(timeFinish) - parseInt(timeStart) + 1)) + parseInt(timeStart) + parseInt(first) + parseInt(second)) * 1000;

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

}



function start() {
  if (arr === undefined) {alert("Nie potwierdzono czasu!!!")} else {

  setNumber(amount)
  console.log(arr)
  console.log("start")


  arr.map(el => {
    setTimeout(setGreenColor, el + timeStart*1000);
    setTimeout(setColor, el + first*1000 + timeStart*1000);
    setTimeout(setWhite, el + first*1000 + second*1000 + timeStart*1000);

   });

 }

}
 function stop() {
   var highestTimeoutId = setTimeout(";");
   for (var i = 0 ; i < highestTimeoutId ; i++) {
       clearTimeout(i);
   }
   setNumber()
   setDiv("white")
 }
 function big() {
   setClassState({isSwitchOn: !classState.isSwitchOn})
 }

  return (
  <div className="App">
  <div className={classState.isSwitchOn ? "inputs none" : "inputs"}>
    <label>
      Czas trwania pierwszego sygnału
      <input
        type="number"
        name="first"
        value={first}
        onChange={handleChangeFirst}
      />
    </label>
    <label>
      Czas trwania drugiego sygnału
      <input
        type="number"
        name="second"
        value={second}
        onChange={handleChangeSecond}
      />
    </label>
    <label>
      Minimalny czas oczekiwania na sygnał
      <input
        type="number"
        name="timeStart"
        value={timeStart}
        onChange={handleChangeStart}
      />
    </label>

    <label>
      Maksymalny czas oczekiwania na sygnał
      <input
        type="number"
        name="timeFinish"
        value={timeFinish}
        onChange={handleChangeFinish}
      />
    </label>
    <label>
      Ilość sekwencji
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={handleChangeAmount}
      />
    </label>
    <button onClick={loop} className="start">
      Kliknij aby zatwierdzić czas
    </button>
    <button onClick={start} className="start">
      Start
    </button>
    <button onClick={stop} className="start">
      Stop
    </button>
  </div>

  <div style={{ backgroundColor: div }} className={classState.isSwitchOn ? "box big" : "box" } onClick={big}>{classState.isSwitchOn ? number : null} </div>
  <div className={classState.isSwitchOn ? "numbers none" : "numbers" }>{!classState.isSwitchOn ? number : null}</div>
    <div className={classState.isSwitchOn ? "colors none" : "colors"}>

              <label style={colors.includes("red") ? styles.red : {}}>
                red
                <input
                  type="checkbox"
                  value="red"
                  onClick={handleWhoGive}
                  defaultChecked={true}
                />
              </label>
              <label style={colors.includes("brown") ? styles.brown : {}}>
                brown
                <input
                  type="checkbox"
                  value="brown"
                  onClick={handleWhoGive}
                />
              </label>
              <label style={colors.includes("blue") ? styles.blue : {}}>
                blue
                <input
                  type="checkbox"
                  value="blue"
                  onClick={handleWhoGive}
                />
              </label>
              <label style={colors.includes("orange") ? styles.orange : {}}>
                orange
                <input
                  type="checkbox"
                  value="orange"
                  onClick={handleWhoGive}
                />
              </label>
              <label style={colors.includes("yellow") ? styles.yellow : {}}>
                yellow
                <input
                  type="checkbox"
                  value="yellow"
                  onClick={handleWhoGive}
                />
              </label>
            </div>
</div>

  );
}

export default App;
