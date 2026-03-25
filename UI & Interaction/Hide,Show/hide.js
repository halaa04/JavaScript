document.querySelectorAll('.show').forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        var content = event.target.nextElementSibling;
        content.style.display = "block";
    });
});

document.querySelectorAll(".hide").forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    var content = event.target.closest(".p");
    content.style.display = "none"; 
  });
});