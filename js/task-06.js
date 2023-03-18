const input = document.querySelector("#validation-input");
function blurInput(event) {
  //   input.value.length !== input.getAttribute("data-length")
  //     ? input.classList.add("valid")
  //     : input.classList.replace("valid", "invalid");
  if (
    input.value.length < input.getAttribute("data-length") ||
    input.value.length > input.getAttribute("data-length")
  ) {
    input.classList.add("invalid");
  } else {
    input.classList.replace("invalid", "valid");
  }
}

input.addEventListener("blur", blurInput);
