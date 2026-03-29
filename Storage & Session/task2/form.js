let name = document.getElementById("name");
let save = document.getElementById("save");
let email = document.getElementById("email")
let form = document.getElementById("form");

form.addEventListener("submit", function () {
    let user = {
      name: username,
      email: emailVal,
    };

    localStorage.setItem("user", JSON.stringify(user));
    let data = localStorage.getItem("user");
    let display = document.createElement("p");
    display.textContent = "Saved name: " + username;
    document.body.appendChild(display);
    
    let savedName = localStorage.getItem("username");
    if (savedName) {
      let display = document.createElement("p");
      display.textContent = "Saved name: " + savedName;
      document.body.appendChild(display);
    }
  
});
