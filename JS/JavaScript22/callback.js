const showAlert = (callback) => {
  alert();
  callback();
};
// callbackas
const logGreeting = () => {
  console.log("Laba diena.");
};
showAlert(logGreeting);

const productAvailabilityList = [true, true, false, true, false, false];
const availableProducts = productAvailabilityList.filter((product) => product);

console.log({ productAvailabilityList, availableProducts });

const printOddProducts = () => {
productAvailabilityList.forEach(
  (product, i) => i % 2 === 1 && console.log(product)
);
};

printOddProducts();

const cars = [
    {
      name: "BMW",
      engineHorsePower: 1000,
    },
    {
      name: "Tesla",
      engineHorsePower: 2000,
    },
    {
      name: "VW",
      engineHorsePower: 500,
    },
  ];
  const sortCarsByHorsePower = (curCar, nextCar) => {
    console.log({ curCar, nextCar });
    return curCar.engineHorsePower - nextCar.engineHorsePower;
  };
  console.log(cars.sort(sortCarsByHorsePower));