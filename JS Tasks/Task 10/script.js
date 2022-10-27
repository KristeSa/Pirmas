/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */
import { composition } from "./modules/math/composition.js";
import { division } from "./modules/math/division.js";
import { substraction } from "./modules/math/subtraction.js";
import { multiplication } from "./modules/math/multiplication.js";

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

const wordToNumber = (word) => {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  return word
    .toLowerCase()
    .split(" ")
    .reduce((acc, value) => {
      const index = numbers.indexOf(value);
      return acc * 10 + index;
    }, 0);
};
console.log(a);
console.log(b);
console.log(c);
console.log(d);

wordToNumber();
