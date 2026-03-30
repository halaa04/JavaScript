let view = document.getElementById("view");
let search = document.getElementById("search");
let clear = document.getElementById("clear");

let user = [
    { name: "Ahmad" },
    { name: "Ali" },
    { name: "Sara" },
    { name: "Lana" },
];

localStorage.setItem("user", JSON.stringify(user));
let data = localStorage.getItem("user");
let afterParsed = JSON.parse(data);

let userSearch = localStorage.getItem("userSearch");
view.innerHTML = "";
if (userSearch) {
    search.value = userSearch;
    let text = search.value.toLowerCase();
    afterParsed.forEach(user => {
        if (user.name.toLowerCase().includes(text)) { addUser(user); }
    });
}
else { afterParsed.forEach(user => addUser(user)); }


search.addEventListener("input", (e) => {
  localStorage.setItem("userSearch", search.value);
  let val = search.value.toLowerCase();
  view.innerHTML = "";
  afterParsed.forEach((element) => {
    if (element.name.toLowerCase().includes(val)) {
      addUser(element);
    }
  });

  if (view.children.length === 0) {
    let newView = document.createElement("div");
    newView.textContent = "no results found";
    view.appendChild(newView);
  }
});

clear.addEventListener("click", () => {
  input.value = "";
  view.innerHTML = "";
  afterParsed.forEach((element) => {
    addUser(element);
  });
});



      function addUser(u) {
            let newView = document.createElement("div");
            newView.classList.add("newView");
            let newName = document.createElement("div")
            newName.textContent = u.name;

            let Btn = document.createElement("button")
            Btn.classList.add("Btn");
            Btn.textContent = "Delete"


            let hr = document.createElement("hr");


            newView.appendChild(newName);
            newView.appendChild(Btn);

            view.appendChild(newView);
            view.appendChild(hr);

            Btn.addEventListener("click", () => {
                newView.remove();
                hr.remove();

                afterParsed = afterParsed.filter(user => user.name !== u.name);
                localStorage.setItem("user", JSON.stringify(afterParsed));
            });
        }
