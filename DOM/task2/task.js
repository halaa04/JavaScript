let card = document.createElement("div");

let title = document.createElement("h1");
title.innerText = "first";
title.textContent = "first";

let des = document.createElement("p");
// let text = document.createTextNode("asd");

// des.append(text);
des.innerText = "my first page";

let img = document.createElement("img");
img.setAttribute("src", " ");

console.log(des);
card.append(title);
card.append(des);


console.log(card);

