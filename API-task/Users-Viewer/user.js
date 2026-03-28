let container = document.getElementById("container");
let btn = document.getElementById("btnFetch");

btn.addEventListener("click", function () {
  container.innerHTML = "";

  btn.textContent = "Loading Users...";
  btn.disabled = true;

  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => {
      let users = data.slice(0, 10);

      users.forEach((user) => {
        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
                    <img src="${user.avatar_url}" alt="${user.login}">
                    <h3>${user.login}</h3>
                    <a href="${user.html_url}" target="_blank">View Profile</a>
                `;

        container.appendChild(card);
      });

      btn.textContent = "Fetch Users Data";
      btn.disabled = false;
    })
    .catch((err) => {
      console.error("Error:", err);
      btn.textContent = "Error! Try Again";
      btn.disabled = false;
    });
});
