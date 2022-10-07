//Ne visos funkcijos turi return statement (nors dažniausiai taip yra).
//Sukurkite funkciją, į kurią paduosite vardą ir jį pa'alert'ins jį :)

function alertName(name) {
  alert(name);
}
alertName("Kristina");

//Ir ne visos funkcijos turi parametrus - sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

function generateRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}
console.log(generateRandomNumber());

//Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

function calcNameLength(firstName, lastName) {
  return firstName.length + lastName.length;
}
console.log(calcNameLength("Kristina", "Saveiko"));

//Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.).
//int: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę.

function getLetterbyIndex(index) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "R",
    "S",
    "T",
    "U",
    "V",
    "Z",
  ];
  return alphabet[index];
}
console.log(getLetterbyIndex(3));

//Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator).
//Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai.
//urite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...).
//Hint: Reikės funkcijoje naudoti if-else arba switch

function calculation(n1, n2, operator) {
  switch (operator) {
    case "sum":
      return n1 + n2;
    case "sub":
      return n1 - n2;
    case "div":
      return n1 / n2;
    case "mult":
      return n1 * n2;
  }
}
console.log(calculation(4, 4, "sum"));

//Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu.
//Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

function generateRandomNumberAgain() {
  return Math.floor(Math.random() * 10) + 1;
}
function generateSquareNumber(number) {
  return Math.pow(number, 2);
}

console.log(generateSquareNumber(generateRandomNumberAgain()));
