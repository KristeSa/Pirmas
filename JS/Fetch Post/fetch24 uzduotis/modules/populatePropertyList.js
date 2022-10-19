import { getPropertyList } from "./getPropertyList.js";

const populatePropertyList = async () => {
  const propertyList = await getPropertyList();
  propertyList.forEach((propertyList) => {
    const propertyImg = document.createElement("img");
    propertyImg.src = propertyList.image;

    const propertyPrice = document.createElement("h5");
    propertyPrice.textContent = `${propertyList.price} Eur`;

    const propertyCity = document.createElement("p");
    propertyCity.textContent = `${propertyList.city}`;

    const propertyDescription = document.createElement("p");
    propertyDescription.textContent = `${propertyList.description}`;

    const propertyCard = document.querySelector("#property-container");
    propertyCard.append(
      propertyImg,
      propertyPrice,
      propertyCity,
      propertyDescription
    );
  });
};

export { populatePropertyList };
