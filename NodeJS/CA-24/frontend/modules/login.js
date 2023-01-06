document.getElementById("login").addEventListener("submit", (e) => {
  e.preventDefault();

  fetch("http://127.0.0.1:3000/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: e.target.elements[0].value,
      password: e.target.elements[1].value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.err) {
        return alert("Incorrect details");
      }

      localStorage.setItem("token", data.token);
      alert("Logged in");
      const route = location.pathname;
      const redirectRoute = route.replace("login.html", "index.html");
      location.assign(redirectRoute);
    })
    .catch((err) => console.log(err));
});
