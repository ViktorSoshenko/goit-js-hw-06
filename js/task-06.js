const input = document.querySelector("#validation-input");
input.addEventListener("blur", onInputBlur);
function onInputBlur() {
  if (
    input.value.length < input.getAttribute("data-length") ||
    input.value.length > input.getAttribute("data-length")
  ) {
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}
