let first = document.getElementById("first");
let last = document.getElementById("last");
let email = document.getElementById("email");

let form = document.getElementById("form");

let data = document.querySelectorAll(".data p");



form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  
  if (first.value === "") {
    alert("First Name is required");
    isValid = false;
  } else if (!first.value.match(/^[a-zA-Z]+$/)) {
    alert("First Name must contain only letters");
    isValid = false;
  }

  if (last.value === "") {
    alert("Last Name is required");
    isValid = false;
  } else if (!last.value.match(/^[a-zA-Z]+$/)) {
    alert("Last Name must contain only letters");
    isValid = false;
  }

  if (email.value === "") {
    alert("Email is required");
    isValid = false;
  }

  if (isValid) {
    data[0].textContent = "First Name: " + first.value;
    data[1].textContent = "Last Name: " + last.value;
    data[2].textContent = "Email: " + email.value;
  }
});
