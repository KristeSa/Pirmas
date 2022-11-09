async function getCars(api) {
  try {
    const response = await fetch(api);
    const cars = await response.json();

    return cars;
  } catch (error) {
    console.error(error);
  }
}

getCars();

const showCars = (cars) => {
  cars.foreach((car) => {
    const list = document.createElement("ul");
    const carItem = document.createElement("li");

    car.textContent = car;

    list.append(carItem);
    document.querySelector(".main-list").append(list);
  });
};
