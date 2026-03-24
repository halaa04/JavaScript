
let old = document.getElementById("title");
let ne = document.createElement("h1");

ne.textContent = "New titel"
ne.classList.add("newTitel");
old.parentElement.replaceChild(ne , old);

