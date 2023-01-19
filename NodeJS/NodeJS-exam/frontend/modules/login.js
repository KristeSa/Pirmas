document.getElementById("login").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  fetch("http://127.0.0.1:5100/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.err) {
        return alert("Incorrect details");
      }

      localStorage.setItem("token", data.token);
      const route = location.pathname;
      const redirectRoute = route.replace("login.html", "groups.html");
      location.assign(redirectRoute);
    })
    .catch((err) => console.log(err));
});
