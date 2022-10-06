class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge() {
    if (this.age >= 18) {
      alert(`${this.name} yra pilnametis`);
    } else {
      alert(`${this.name} yra nepilnametis`);
    }
  }
}
const p1 = new Person("Petras", 40);
console.log(p1.compareAge());

//2. Parašykit funkciją, kuri priimtu mąsyvą sudarytą iš skaičių ir raidžių. Grąžinkite masyvą tik su skaičiais.
//pvz: fn([1, 5, "a", "g", "z", 6]) => [1, 5, 6]

const input = [1, 5, "a", "g", "z", 6];

function getNumbers(x) {
  return typeof x === "number";
}

const output = input.filter(getNumbers);
console.log(output);

//kitas var:
//const filterOutLetters = (arr) => arr.filter(element => typeof element === "number");
//console.log(filterOutLetters([1, 5, "a", "g", "z", 6]));

//3. Sukurk funkciją, kuri paims stringą kaip parametrą ir padvigubins kiekvieną raidę (bet ne simbolį ar skaičių).
//pvz: fn("Petras 123 Slekys") => "PPeettrraass 123 SSlleekkyyss"

const dublicateAllLetters = (text) =>
  text
    .split("")
    .map((element) => (element.match(/[a-z]/i) ? element.repeat(2) : element))
    .join("");

console.log(dublicateAllLetters("Kristina 678 Saveiko"));

//4. Parašykite funkciją, kuri tikrins ar paduotas post code - teisingas
//Post code turi susidėti iš 5 skaičių, arba trijų skaičių ir dviejų raidžių. Jei yra tarpų - post code neteisingas.
//Pvz: fn("abc123") => false; fn("12345") => true; fn("123ab") => true.

const isValidPostcode = (postCode) =>
  /^\d{5}|[0-9]{3}[A-Za-z]{2}$/.test(postCode);

console.log(isValidPostcode("12584"));
console.log(isValidPostcode("ght12"));
console.log(isValidPostcode("125ka"));
console.log(isValidPostcode("12sko"));

//Sukurkite funkciją, kuri priims array ir prie kiekvieno array elemento pridės "7", nebent elementas baigsis "7".
//pvz:
// jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]
// jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]
// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// jazzify([]) ➞ []

const addNumberSeven = (array) =>
  array.map((element) =>
    element.endsWith("7") ? element : element.concat("7")
  );
console.log(addNumberSeven(["a1", "j5", "l7", "u8", "t9"]));
