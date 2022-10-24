import { addPageHeader } from "./header.js";

import { calcMultiplication } from "./multi.js";

import { renderCars } from "./cars.js";

addPageHeader();

const multi = calcMultiplication(2, 5);

console.log(multi);

renderCars();
