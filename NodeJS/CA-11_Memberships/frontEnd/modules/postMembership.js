const addMembership = document.querySelector("form");

addMembership.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const price = +document.querySelector("#price").value;
  const description = document.querySelector("#description").value;

  const newMembership = { name, price, description };

  const response = await fetch("http://127.0.0.1:5040/membership", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMembership),
  });

  if (response.ok) {
    try {
      const successText = document.createElement("p");
      successText.textContent = "Sėkmingai pateikėte duomenis";
      addMembership.reset();
      document.body.append(successText);
      addMembership.reset();
    } catch (error) {
      console.error(error);
    }
  }
});

const clearMembershipForm = document.getElementById("cancel");

<<<<<<< HEAD
clearMembershipForm.addEventListener("click", () => {
=======
clearMembershipForm.addEventListener("click", (event) => {
>>>>>>> a87aace (nauji failai)
  addMembership.reset();
});
