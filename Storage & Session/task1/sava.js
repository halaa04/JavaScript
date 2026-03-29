let name = document.getElementById("name");
let save = document.getElementById("save");

save.addEventListener("click", function () {
    let username = name.value;
    localStorage.setItem("username", username)
    let display = document.createElement("p");
     display.innerText=localStorage.getItem("username")
    document.body.append(display);
}

)