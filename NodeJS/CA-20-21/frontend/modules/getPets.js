import { renderPets } from "./renderPets.js";

async function getPets() {
  try {
    const response = await fetch("http://localhost:5070/v1/pets");
    const pets = await response.json();

    return pets;
  } catch (error) {
    console.error(error);
  }
}

const pets = await getPets();

renderPets(pets);

export { getPets };
