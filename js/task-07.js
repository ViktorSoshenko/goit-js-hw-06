const input = document.querySelector("#font-size-control");
const minAtrebut = input.getAttribute("min");
console.log(minAtrebut);
const maxAtrebut = input.getAttribute("max");
console.log(maxAtrebut);
const span = document.querySelector("#text");

function minMaxFontSize() {
  span.style.fontSize = `${input.value}px`;
}

input.addEventListener("input", minMaxFontSize);
