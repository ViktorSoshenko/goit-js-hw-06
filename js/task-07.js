const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
span.style.fontSize = `${input.value}px`;
input.addEventListener("input", minMaxFontSize);

function minMaxFontSize() {
  const size = input.value;
  span.style.fontSize = `${size}px`;
}
