let sortOrder = "asc";
let selectedPets = ["dog", "cat", "parrot"];

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
    const response = await fetch(
      `http://127.0.0.1:5030/pets/${selectedPets.join(",")}/${sortOrder}`
    );
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
    sortOrder = "dsc";
    // fetch("http://127.0.0.1:5030/pets/dsc")
    //   .then((res) => res.json())
    //   .then((pets) => displayPets(pets));
  } else {
    e.target.textContent = text.replace("Dsc", "Asc");
    sortOrder = "asc";
    // fetch("http://127.0.0.1:5030/pets/asc")
    //   .then((res) => res.json())
    //   .then((pets) => displayPets(pets));
  }
  getPets();
});

document.querySelectorAll("button").forEach((button) =>
  button.addEventListener("click", (e) => {
    e.target.classList.toggle("selected");
    const petClicked = e.target.textContent.toLowerCase();

    if (selectedPets.includes(petClicked)) {
      selectedPets = selectedPets.filter(
        (petStored) => petStored !== petClicked
      );
    } else {
      selectedPets.push(petClicked);
    }
    getPets();
  })
);
