const myTextarea = document.getElementById("myTextarea");
const fontFamily = document.getElementById("font-family");
const fontSize = document.getElementById("font-size");
const Italic = document.getElementById("check1");
const Bold = document.getElementById("check2");
const Underline = document.getElementById("check3");

fontFamily.addEventListener("change", function () {
  myTextarea.style.fontFamily = fontFamily.value;
});

fontSize.addEventListener("change", function () {
  myTextarea.style.fontSize = fontSize.value;
});

Bold.addEventListener("change", function () {
  myTextarea.style.fontWeight = Bold.checked ? "bold" : "normal";
});

Italic.addEventListener("change", function () {
  myTextarea.style.fontStyle = Italic.checked ? "italic" : "normal";
});

Underline.addEventListener("change", function () {
  myTextarea.style.textDecoration = Underline.checked ? "underline" : "none";
});

myTextarea.addEventListener("input", function () {
  if (myTextarea.value.length > 0) {
    myTextarea.classList.add("highlight-bg");
  } else {
    myTextarea.classList.remove("highlight-bg");
  }
});

setInterval(function () {
  myTextarea.classList.toggle("highlight-bg");
}, 2500);
