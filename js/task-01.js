const catigories = document.querySelectorAll(".item");
console.log(`Number of categories: ${catigories.length}`);
catigories.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}
Elements: ${el.lastElementChild.children.length}`);
});
