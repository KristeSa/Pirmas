import { showCars } from "./showCars.js";

async function getCars() {
  try {
    const response = await fetch("http://localhost:5008/cars");
    const cars = await response.json();
    console.log(cars);
    return cars;
  } catch (error) {
    console.error(error);
  }
}

const cars = await getCars();

showCars(cars);
