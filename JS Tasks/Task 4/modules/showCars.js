const showCars = (cars) => {
  cars.forEach((car) => {
    const output = document.querySelector("#output");
    const carBrandCard = document.createElement("div");
    const carModels = document.createElement("p");
    console.log(cars);
    carBrandCard.textContent = car.brand;
    carModels.textContent = car.models;

    carBrandCard.setAttribute("id", "brand-card");
    carModels.setAttribute("id", "car-model");

    carBrandCard.append(carModels);
    output.append(carBrandCard);
  });
};

export { showCars };
