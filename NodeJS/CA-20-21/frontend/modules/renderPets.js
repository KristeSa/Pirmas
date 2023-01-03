import { getPets } from "./getPets.js";

const pets = await getPets();

const renderPets = () => {
  const petsContainer = document.querySelector("#pets-container");
  petsContainer.replaceChildren();

  pets.forEach((pet) => {
    const { id, name, dob, client_email } = pet;

    const petCard = document.createElement("div");
    const petName = document.createElement("h3");
    const petDob = document.createElement("h5");
    const petClientEmail = document.createElement("h5");
    const viewLogButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    petName.textContent = name;
    petDob.textContent = dob;
    petClientEmail.textContent = client_email;
    viewLogButton.id = id;
    deleteButton.id = id;
    viewLogButton.textContent = "VIEW LOG";
    deleteButton.textContent = "DELETE";

    petCard.setAttribute("class", "pet-card");
    petDob.setAttribute("id", "pet-dob");
    petClientEmail.setAttribute("id", "pet-client-email");

    petCard.append(
      petName,
      petDob,
      petClientEmail,
      viewLogButton,
      deleteButton
    );
    petsContainer.append(petCard);

    viewLogButton.addEventListener("click", () => {
      const route = location.pathname;
      const redirectRoute = route.replace(
        "index.html",
        `log.html?=${viewLogButton.id}`
      );
      location.assign(redirectRoute);
    });

    const archievePet = async () => {
      try {
        const response = await fetch(
          `http://localhost:5070/v1/pets/${deleteButton.id}`,
          {
            method: "DELETE",
          }
        );

        const isPetArchived = response.ok;

        if (isPetArchived) {
          alert("Pet archieved succsesfully");
        }
      } catch (error) {
        console.error(error);
      }
    };
    deleteButton.addEventListener("click", archievePet);
  });
};

renderPets();

export { renderPets };
