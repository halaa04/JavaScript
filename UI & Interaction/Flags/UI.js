var img = document.createElement("img"); 
img.style.width = "300px"; 
document.body.appendChild(img); 

let menu = document.getElementById("menu");
menu.addEventListener("change", function (event) {
  let code = event.target.value;
    img.src = code + '.png';
});
