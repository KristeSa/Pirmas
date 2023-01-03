//import { getLogs } from "./getLogs.js";

async function getLogs() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  console.log(id);

  try {
    const response = await fetch(`http://localhost:5070/v1/logs?id=${id}`);
    const logs = await response.json();

    return logs;
  } catch (error) {
    console.error(error);
  }
}

const logs = await getLogs();

const renderPetLog = () => {
  const petLogContainer = document.querySelector("#pets-container");
  const petNameSpan = document.querySelector("#pet-name");
  petLogContainer.replaceChildren();

  logs.forEach((log) => {
    const { name, dob, description, status } = log;

    const petCard = document.createElement("div");
    const petDob = document.createElement("h5");
    const logDescription = document.createElement("h3");
    const logStatus = document.createElement("h5");
    const logDate = document.createElement("h5");

    logDescription.textContent = description;
    logStatus.textContent = status;
    petDob.textContent = dob;
    petNameSpan.textContent = name;
    logDate.textContent = new Date().toLocaleDateString();

    petCard.setAttribute("class", "pet-card");

    petCard.append(logDescription, logStatus, name, petDob, logDate);
    petLogContainer.append(petCard);
  });
};

renderPetLog();

//export { renderPetLog };
