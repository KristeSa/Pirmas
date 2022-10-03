//Sukurk variable 'legalAge', kuris būtų lygus 20.
//Antra variable 'clientAge' su bet kokiu skaičiumi.
//Pasirašyk if-else, kuris alert išmestų ar klientas jau pasiekęs šį legalAge, ar dar ne.

const legalAge = 20;
const clientAge = 14;

if (clientAge >= legalAge) {
  alert("jau pasiekes");
} else {
  alert("dar ne");
}

//Pasirašyk kintamą su savo vardu. Sukurk if-else, kuris pasakys "Ilgas vardas"
//jei tavo vardas ilgesnis nei 6 raidės. Kitu atveju, nieko neišmes.
//String ilgį gali susižinoti prirašant 'length' property
//(pvz.: "Petras".length arba su kintamu: name.length).

const myName = "Kristina";

if (myName.length > 6) {
  alert("ilgas vardas");
}

//Sukurt kintamąjį su savo amžiumi.
//Patikrink: jei amžius didesnis nei 100, arba mažesnis nei 0 - tegul išmeta "Invalid age";
//jei tarp 1 ir 18 - "Child"; jei tarp 19 ir 99 - "Adult".

const myAge = 50;
if (myAge < 0 || myAge > 100) {
  alert("Invalid age");
} else if (myAge <= 18) {
  alert("Child");
} else {
  alert("Adult");
}

//Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui.
//Sukurk if-else, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
//VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
//BMW group priklauso: BMW, Mini, Rolls-Royce.

const carName = prompt("what car?");

const vwGroupCar = [
  "VW",
  "Audi",
  "Bentley",
  "Bugatti",
  "Lamborgini",
  "Porsche",
];

const bmwGroupCar = ["BMW", "Mini", "Rolls-Royce"];

if ((carName = vwGroupCar)) {
  console.log("VW group");
} else if ((carName = bmwGroupCar)) {
  console.log("BMW group");
} else {
  console.log("another group");
}
