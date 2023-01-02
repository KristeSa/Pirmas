import { getLogs } from "./getLogs.js";

const search_query = window.location.search;
const pet_id_query = new URLSearchParams(search_query);
const pet_id = pet_id_query.get("id");

const logs = await getLogs();

const renderPetLog = () => {
  const petLogContainer = document.querySelector("#pets-container");
  const petNameSpan = document.querySelector("#pet-name");
  petLogContainer.replaceChildren();

  logs.forEach((log) => {
    const { name, description, status } = log;

    const logsButton = document.createElement("button");
    const prepButton = document.createElement("button");
    const petCard = document.createElement("div");
    const logDescription = document.createElement("h3");
    const logStatus = document.createElement("h5");
    const logDate = document.createElement("h5");

    logDescription.textContent = description;
    logStatus.textContent = status;
    //pet_id.textContent = pet_id;
    petNameSpan.textContent = name;
    //logDate.textContent = NewDate().toLocaleDateString();
    logsButton.textContent = "LOGS";
    prepButton.textContent = "PRESCRIPTIONS";

    petCard.append(logDescription, logStatus, name, logDate);
    petLogContainer.append(petCard);
  });
};

renderPetLog();

export { renderPetLog };
