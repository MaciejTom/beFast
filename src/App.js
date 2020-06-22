import React, {useState, useEffect} from "react";


function App() {

  const [randomColor, setRandomColor] = useState(0)
  const [randomNumber, setRandomNumber] = useState(0)
  const [div, setDiv] = useState("white")
  const [first, setFirst] = useState(1)
  const [second, setSecond] = useState(1)
  const [timeStart, setTimeStart] = useState(0);
  const [timeFinish, setTimeFinish] = useState(12);
  const [arr, setArr] = useState();



const setGreenColor = (arr) => {
  setDiv("green")
  // console.log(el)


}
const setColor = () => {
  const colors = ['red', 'bronze', 'blue', 'orange', 'yellow'];
  setDiv(colors[Math.floor(Math.random() * (colors.length - 0 + 1))+0])
  // console.log(el + first*1000)
}
const setWhite = () => {
  setDiv("white")
  // console.log(el + first*1000 + second*1000)
}

  useEffect(() => {
    console.log("useEffect")
    const div = document.querySelector(".box");


  },[])


  const handleChangeFirst = (e) => {

    setFirst(e.target.value)

    // console.log(array)
     // setInfo((prev => ({ ...prev, [target.name]: target.value })));
     // console.log("first")
     // console.log(info.first)
   }

   const handleChangeSecond = (e) => {
     setSecond(e.target.value)
      // console.log(array)
      // setInfo((prev => ({ ...prev, [target.name]: target.value })));
      console.log("second")
    }
    const handleChangeStart = (e) => {
      setTimeStart(e.target.value)
      // console.log(array)

       // setInfo((prev => ({ ...prev, [target.name]: target.value })));
       console.log("third")

     }
     const handleChangeFinish = (e) => {
       setTimeFinish(e.target.value)
       // console.log(array)
        // setInfo((prev => ({ ...prev, [target.name]: target.value })));
        console.log("fourth")
      }
      function loop() {
        const x = 100;
        let array = [];
        let y = 0;
        let random = (Math.floor(Math.random() * (parseInt(timeFinish) - parseInt(timeStart) + 1)) + parseInt(timeStart))*1000;

        // parseFloat(random)

        y = random + y;
        array.push(y);
        for (let i = 0; i < x; i++) {
          // Math.floor(Math.random() * (max - min + 1)) + min;
          // random = (Math.floor(Math.random() * (timeFinish - timeStart + 1)) + timeStart + first + second)*1000;
          random = (Math.floor(Math.random() * (parseInt(timeFinish) - parseInt(timeStart) + 1)) + parseInt(timeStart) + parseInt(first) + parseInt(second))*1000;

          console.log(y)

          // parseFloat(random)

          y = random + y;

          array.push(y);

          // random = ((Math.floor(Math.random() * (info.timeFinish - info.timeStart)) + info.timeStart  + info.first + info.second))*1000;
        }
        console.log(array)
        y = 0;
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
      random = 0
        setArr(array)
        array = [];


      }


const start = () => {

  console.log(arr)
  console.log("start")
  arr.map(el => {
     setTimeout(setGreenColor, el + timeStart*1000);
     setTimeout(setColor, el + first*1000 + timeStart*1000);
     setTimeout(setWhite, el + first*1000 + second*1000 + timeStart*1000);
   });
 }



//






  return (
    <div className="App">
      <div className="inputs">


        <label>Czas trwania pierwszego sygnału
      <input type="number" name="first" value={first} onChange={handleChangeFirst} />
      </label>
      <label>Czas trwania drugiego sygnału
      <input type="number" name="second" value={second} onChange={handleChangeSecond}  />
      </label>
      <label>Minimalny czas oczekiwania na sygnał
      <input type="number" name="timeStart" value={timeStart} onChange={handleChangeStart}  />
      </label>


      <label>Maksymalny czas oczekiwania na sygnał
      <input type="number" name="timeFinish" value={timeFinish} onChange={handleChangeFinish}  />
      </label>
      <button onClick={loop} className="start">Kliknij aby zatwierdzić czas</button>
      <button onClick={start} className="start">Start</button>
      </div>




      <div className="box" style={{backgroundColor: div}}></div>
    </div>
  );
}

export default App;
