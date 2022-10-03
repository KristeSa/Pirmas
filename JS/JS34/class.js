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

function isPostCodeRight(x)

