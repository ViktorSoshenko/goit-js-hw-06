// const input = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");
// const inputValueAutput = (event) => {
//   if (input.value === "" || event.currentTarget.value.trim() !== "") {
//     output.textContent = "Anonymous";
//   } else {
//     output.textContent = input.value;
//   }
// };
// input.addEventListener("input", inputValueAutput);

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const spanEl = document.querySelector("span");

function onInputChange(event) {
  if (event.currentTarget.value.trim() !== "") {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = "Anonymous";
  }
}
input.addEventListener("input", onInputChange);
