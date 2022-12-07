const addPet = document.querySelector("#form");

addPet.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const age = +document.querySelector("#age").value;
  const type = document.querySelector("#type").value;

  const newPet = { name, age, type };

  const response = await fetch("http://127.0.0.1:5030/pet", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPet),
  });

  if (response.ok) {
    try {
      const successText = document.createElement("p");
      successText.textContent = "Sėkmingai pateikėte duomenis";
      document.body.append(successText);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
});
