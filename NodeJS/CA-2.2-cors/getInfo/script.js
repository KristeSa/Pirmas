const main = document.querySelector(".main-list");
const list = document.createElement("ul");

const doFetch = async () => {
  const getCars = async () => {
    try {
      const response = await fetch("http://localhost:5005/cars");
      const cars = await response.json();
      return cars;
    } catch (error) {
      console.error(error);
    }
  };
  const cars = await getCars();
  cars.forEach((car) => {
    const carItem = document.createElement("li");
    carItem.textContent = car;

    //console.log(carItem);

    list.append(carItem);
    main.append(list);
  });
};

doFetch();
