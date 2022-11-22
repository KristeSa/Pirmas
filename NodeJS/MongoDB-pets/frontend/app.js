function displayPets(pets) {
  const table = document.querySelector("#pets");
  table.innerHTML = "";

  pets.forEach((pet) => {
    const tr = document.createElement("tr");
    const petName = document.createElement("td");
    const petType = document.createElement("td");
    const petAge = document.createElement("td");

    petName.innerHTML = pet.name;
    petType.innerHTML = pet.type;
    petAge.innerHTML = pet.age;

    tr.append(petName, petType, petAge);
    table.append(tr);
  });
}

const getPets = async () => {
  try {
    const response = await fetch("http://127.0.0.1:5030/pets");
    const pets = await response.json();
    await displayPets(pets);
  } catch (error) {
    console.error(error);
  }
};

getPets();

document.getElementById("age").addEventListener("click", (e) => {
  const text = e.target.textContent;
  if (text.includes("Asc")) {
    e.target.textContent = text.replace("Asc", "Dsc");
    fetch("http://127.0.0.1:5030/pets/dsc")
      .then((res) => res.json())
      .then((pets) => displayPets(pets));
  } else {
    e.target.textContent = text.replace("Dsc", "Asc");
    fetch("http://127.0.0.1:5030/pets/asc")
      .then((res) => res.json())
      .then((pets) => displayPets(pets));
  }
});
