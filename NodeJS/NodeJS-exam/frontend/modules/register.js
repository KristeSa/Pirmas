document.getElementById("register").addEventListener("submit", (e) => {
  e.preventDefault();

  const full_name = document.querySelector("#fullName").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const repeatedPassword = document.querySelector("#repeated-password").value;

  if (password !== repeatedPassword) {
    return alert("Passwords do not match");
  }

  fetch("http://127.0.0.1:5100/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      full_name,
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Registration is successfull. Please Login");
      const route = location.pathname;
      const redirectRoute = route.replace("register.html", "login.html");
      location.assign(redirectRoute);
    })
    .catch((error) => console.log({ error }));
});
