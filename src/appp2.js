function respond() {
  const makeRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    return randomColor;
  };
  makeRandomColor();

  const setWhite = () => {
    const div = document.querySelector(".box");
    console.log(div);
    div.style.background = "white";
    console.log("zmieniam na białe");
  };

  const setRandomColor = () => {
    const div = document.querySelector(".box");
    const colors = ["red", "green", "blue", "orange", "yellow"];
    div.style.background = colors[Math.floor(Math.random() * colors.length)];

    console.log("zmieniam na randomowe");

    makeRandomColor();
  };
  const setGreenColor = () => {
    const div = document.querySelector(".box");
    div.style.background = "green";
    console.log("zmieniam na zielone");
  };

  const randomNumber = () => {
    const number = Math.floor(Math.random() * (12 - 2) + 2) * 1000
    return number
  };
  randomNumber();

  const x = 100;
  let array = [];
  let y = 0;
  for (let i = 0; i < x; i++) {
    y = number + y;
    array.push(y);
    randomNumber();
  }
  console.log(array);
  array.map(el => {
    setTimeout(setGreenColor, el);
    setTimeout(setRandomColor, el + 1000);
    setTimeout(setWhite, el + 2000);
  });
}
const button = document.querySelector(".start");

function changeBtnClassAndEvent() {
  button.removeEventListener("click", twoFunctions);
  button.classList.remove("start");
  button.classList.add("start2");
}
function twoFunctions() {
  respond();
  changeBtnClassAndEvent();
}
button.addEventListener("click", twoFunctions);

return (
  <div className="App">
    <button class="start">Start</button>
    <div class="box"></div>
  </div>
);
}
