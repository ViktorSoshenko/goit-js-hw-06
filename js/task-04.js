const counterValue = document.querySelector("#value");
console.log(counterValue);

const previusBtn = document.querySelector('button[data-action="decrement"]');
console.log(previusBtn);

const nextBtn = document.querySelector('button[data-action="increment"]');
console.log(nextBtn);
// +
const decrementPlus = () => {
  counterValue.textContent -= nextBtn.textContent;
};
// -
const incrementMinus = () => {
  counterValue.textContent -= previusBtn.textContent;
};

nextBtn.addEventListener("click", incrementMinus);

previusBtn.addEventListener("click", decrementPlus);
