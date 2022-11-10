const nameForm = document.querySelector(".user-name");

nameForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const firstNameInput = document.querySelector("#first-name").value.trim();
  const lastNameInput = document.querySelector("#last-name").value.trim();

  try {
    const response = await fetch("http://127.0.0.1:5050", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstNameInput,
        lastName: lastNameInput,
      }),
      // headers: {
      //   "Content-Type": "application/json; charset=UTF-8",
      // },
    });
    if (response.ok) {
      const route = location.pathname; // pvz. .../addProduct.html
      const redirectRoute = route.replace("nameList", "index");
      location.assign(redirectRoute);
    }
  } catch (error) {
    console.error(error);
  }
});
