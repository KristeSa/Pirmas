const signInForm = document.querySelector("form#signInForm");
signInForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userId = document.querySelector("#userId").value.trim();
  const password = document.querySelector("#password").value.trim();

  try {
    const response = await fetch("http://localhost:5001/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName: userId, password }),
    });

    const authData = await response.json();

    if (!response.ok || response.status >= 400) {
      return alert(authData?.error || response.statusText);
    }
    localStorage.setItem("accessToken", authData.accessToken);
  } catch (error) {
    return console.error(error);
  }
});
