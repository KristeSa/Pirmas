const state = {};

function generateFilterButtons(cities) {
  cities.forEach((city) => {
    const filterButton = document.createElement("button");
    filterButton.innerText = city;

    const buttonsContainer = document.querySelector(
      "#filter-buttons-container"
    );
    buttonsContainer.append(filterButton);
  });
}

const propertyContainer = document.querySelector("#property-container");
const populatePropertyList = (propertyList) => {
  propertyList.forEach((propertyList) => {
    const propertyImg = document.createElement("img");
    propertyImg.src = propertyList.image;

    const propertyPrice = document.createElement("h5");
    propertyPrice.textContent = `${propertyList.price} Eur`;

    const propertyCity = document.createElement("p");
    propertyCity.textContent = `${propertyList.city}`;

    const propertyDescription = document.createElement("p");
    propertyDescription.textContent = `${propertyList.description}`;

    const propertyCard = document.createElement("div");
    propertyCard.setAttribute("class", "property-card");
    propertyCard.append(
      propertyImg,
      propertyPrice,
      propertyCity,
      propertyDescription
    );
    propertyContainer.append(propertyCard);
  });
};
getPropertyList();

function getPropertyList() {
  fetch("https://robust-safe-crafter.glitch.me/")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    })
    .then((data) => {
      state["propertyList"] = data;
      populatePropertyList(data);
      generateFilterButtons([...new Set(data.map((entry) => entry.city))]);
    })
    .catch((error) => {
      console.error(error);
    });
}

function filterCity(event) {
  if (event.target.tagName.toLowerCase() === "button") {
    const isAlreadySelected = event.target.classList.contains("selected");
    if (isAlreadySelected) {
      populatePropertyList(state.propertyList);
    } else {
      const cityClicked = event.target.innerText;
      populatePropertyList(
        state.propertyList.filter(
          (propertyList) => propertyList.city === cityClicked
        )
      );
      const allFilterButtons = event.target.parentNode.children;
      for (let i = 0; i < allFilterButtons.length; i++) {
        allFilterButtons[i].classList.remove("selected");
      }
    }
    event.target.classList.toggle("selected");
  }
}

document
  .getElementById("filter-buttons-container")
  .addEventListener("click", filterCity);
