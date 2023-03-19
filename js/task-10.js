const control = document.querySelector("#controls");
console.log(control);

const input = document.querySelector("[type='number']");
console.log(input);

let createBtn = document.querySelector("[data-create]");
console.log(createBtn);

const destroyBtn = document.querySelector("[data-destroy]");
console.log(destroyBtn);

const boxElements = document.getElementById("boxes");
console.log(boxElements);

createBtn.addEventListener("click", createBoxes(input.value.setAttribute));

function createBoxes(amount) {
  for (let i = input.min; i <= amount; i++) {
    let box = document.createElement("div");
    boxElements.appendChild(box);
    box.style.width = `${30 * i}px`;
    box.style.height = `${30 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// function createBoxes(amount) {
//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement("div");
//     box.style.width = `${30 + 10 * i}px`;
//     box.style.height = `${30 + 10 * i}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxElements.appendChild(box);
//   }
// }
function destroyBoxes() {
  while (boxElements.firstChild) {
    boxElements.removeChild(boxElements.firstChild);
  }
}
destroyBtn.addEventListener("click", destroyBoxes);
console.log(boxElements.firstChild);
// control.addEventListener("click", (e) => {
//   if (e.target && e.target.dataset && e.target["create"]) {
//     const inputValue = control["input"].value;
//     createBoxes(inputValue);
//   } else {
//     e.target && e.target;
//   }
// });
// createBtn.addEventListener("click", createBoxes);
