/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

import { showCars } from "./modules/showCars.js";

const ENDPOINT = "cars.json";

async function getCars(api) {
  try {
    const response = await fetch(api);
    const cars = await response.json();

    return cars;
  } catch (error) {
    console.error(error);
  }
}

const cars = await getCars(ENDPOINT);

showCars(cars);
