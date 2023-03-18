// const nameInput = document.querySelector("#name-input");
// console.log(nameInput);

// const nameOutput = document.querySelector("#name-output");
// console.log(nameOutput);

// nameInput.addEventListener("input", inputFunction);

// function inputFunction(event) {
//   if (nameInput.value === "") {
//     nameOutput.textContent = "Anonymous";
//   } else {
//     nameOutput.textContent = event.currentTarget.value;
//   }
// }
// // nameInput.addEventListener("keydown", (event) => {
// //   return (nameOutput.innerHTML = event.currentTarget);
// // });
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const inputValueAutput = () => {
  if (input.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = input.value;
  }
};
input.addEventListener("input", inputValueAutput);
