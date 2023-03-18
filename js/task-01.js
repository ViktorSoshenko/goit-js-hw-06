const liItem = document.querySelectorAll(".item");

console.log(`Number of categories: ${liItem.length}`);
liItem.forEach(function (liEl) {
  const title = liEl.firstElementChild;
  console.log(`Category:${title.textContent}`);
  const lastList = liEl.querySelector("ul");
  const liLister = lastList.querySelectorAll("li");

  console.log(`Elements:${liLister.length}`);
});
