function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");

const button = document.querySelector(".change-color");

const span = document.querySelector(".color");

function colorFunc() {
  body.style.backgroundColor = getRandomHexColor();
  console.log(`color value :${(span.textContent = getRandomHexColor())}`);
}

button.addEventListener("click", colorFunc);
