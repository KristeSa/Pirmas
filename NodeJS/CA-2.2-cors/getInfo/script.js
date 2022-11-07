const getCars = async () => {
  try {
    const response = await fetch(api);
    const cars = await response.json();

    return cars;
  } catch (error) {
    console.error(error);
  }
};

await getCars();
