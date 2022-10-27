const getCars = async () => {
  try {
    const response = await fetch("./cars.json");
    const cars = await response.json();

    return cars;
  } catch (error) {
    console.error(error);
  }
};

export { getCars };
