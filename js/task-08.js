const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", functionForm);

function functionForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }
  console.log(`email: ${email.value} Password: ${password.value}`);
  event.currentTarget.reset();
}
