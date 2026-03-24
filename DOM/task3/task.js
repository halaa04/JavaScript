let container = document.getElementById("container");
let ul = container.lastElementChild;
let firstLi = ul.lastElementChild;
let secondLi = firstLi.previousElementSibling;
console.log(secondLi.textContent);