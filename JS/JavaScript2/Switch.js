const car = "VW";

switch (car) {
  case "VW":
  case "Audi":
  case "Bentley":
  case "Bugatti":
  case "Lamborghini":
  case "Porsche":
    console.log(`VW group ${car}`);
    break;

  case "BMW":
  case "Mini":
  case "Rolls-Royce":
    console.log(`BMW group ${car}`);
    break;

  default:
    console.log(`another group ${car}`);
    break;
}

const userInput = "carrot";

switch (userInput) {
  case "apple":
  case "pear":
  case "pineapple":
  case "mango":
    console.log("Fruit");
    break;

  case "carrot":
  case "potato":
  case "tomato":
  case "cucumber":
    console.log("vegetable");
    break;

  default:
    console.log(`another kind ${userInput}`);
    break;
}

let weekDay = new Date().getDay();

switch (weekDay) {
  case 0:
    weekDay = "Sekmadienis";
    break;
  case 1:
    weekDay = "Pirmadienis";
    break;
  case 2:
    weekDay = "Antradienis";
    break;
  case 3:
    weekDay = "Trečiadienis";
    break;
  case 4:
    weekDay = "Ketvirtadienis";
    break;
  case 5:
    weekDay = "Penktadienis";
    break;
  case 6:
    weekDay = "Šeštadienis";
    break;
}
console.log(weekDay);

const myName = "Kristina";
console.log(myName.length < 5 ? "Short name" : "Long name");
// const nameLength = myName.length <= 6 ? alert("short name") : alert("long name");

const clientAge = 19;
const legalAge = 18;
console.log(clientAge >= legalAge ? "Can drive" : "Too young");
// const age = clientAge >= legalAge ? alert("Can drive") : alert("too young");

const myAge = 7;
const legAge = 18;
myAge < 0 || myAge > 120
  ? console.log("Invalid age")
  : myAge >= legAge
  ? console.log("Can drive")
  : console.log("Too young");

const phone = "iPhone";
const isIphoneUser = phone === "iPhone";

for (let myName = 0; myName < 10; myName++) console.log("Kristina");

const firstName = "Kriste";
const count = 10;
for (let i = 0; i < count; i++) console.log(firstName);

const firsName = "Kriste";
const countTimes = 10;
for (let i = 0; i < countTimes; i++) console.log(`${i}, ${firsName}`);

let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}
