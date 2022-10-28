const showCars = (cars) => {
  cars.forEach((car) => {
    const output = document.querySelector("#output");
    const carBrandCard = document.createElement("div");
    const carBrand = document.createElement("h2");
    const carModels = document.createElement("p");

    carBrand.textContent = car.brand;
    carModels.innerText = car.models;

    carBrandCard.setAttribute("id", "brand-card");
    carBrand.setAttribute("id", "card-brand");
    carModels.setAttribute("id", "car-model");

    carBrandCard.append(carBrand, carModels);
    output.append(carBrandCard);
  });
};

export { showCars };
