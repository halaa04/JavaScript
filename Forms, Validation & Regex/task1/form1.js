let first = document.getElementById("first");
let last = document.getElementById("last");
let email = document.getElementById("email");

let form = document.getElementById("form");


let paragraphs = document.querySelectorAll(".data p");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  paragraphs[0].textContent = "First Name: " + first.value;
  paragraphs[1].textContent = "Last Name: " + last.value;
  paragraphs[2].textContent = "Email: " + email.value;
});
