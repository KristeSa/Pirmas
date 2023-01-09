document.getElementById("register").addEventListener("submit", (e) => {
  e.preventDefault();

  fetch("http://127.0.0.1:5100/v1/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: e.target.elements[0].value,
      password: e.target.elements[1].value,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
