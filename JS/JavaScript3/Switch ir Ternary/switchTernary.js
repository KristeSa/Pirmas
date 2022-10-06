const myAge = 41;
const myBirthYear = 2021 - myAge;
console.log(myBirthYear);

//Sukurkite variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui.
//Aprašykite Switch, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
//VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
//BMW group priklauso: BMW, Mini, Rolls-Royce.

const car = prompt("What car?");
switch (car) {
  case "VW":
  case "Audi":
  case "Bentley":
  case "Bugatti":
  case "Lamborghini":
  case "Porsche":
    console.log("VW car");
    break;
  case "BMW":
  case "Mini":
  case "Rolls-Royce":
    console.log("BMW car");
    break;
  default:
    console.log("Kita grupe");
}

//Sukurkite variable 'userInput' ir pradžioje prilyginkite 'Obuolys'.
//Su Switch statement apsirašyk, kad 'userInput' reikmšmė yra - vaisius ar daržovė.
//Pridėkite bent 5 kiekvienos kategorijos (trūksta idėjų? Wiki į pagalbą: vaisiai, daržovės).

const userInput = prompt("iveskite vaisiu ar darzove");
switch (userInput) {
  case "obuolys":
  case "kriause":
  case "bananas":
    console.log(`vaisius ${userInput}`);
    break;
  case "morka":
  case "bulve":
  case "ridikas":
    console.log(`darzove ${userInput}`);
    break;
  default:
    console.log("kitas");
    break;
}

//Kokia šiandien diena? Sukurkite variable 'weekDay', kuris būtų lygus skaičiui - savaitės dienai
//skaičiuojant nuo 0 (t.y. pirmadienis - 0; antradienis - 1; trečiadienis - 2 ir t.t.).
//Parašykite Switch statement, kuris paimtų skaičių ir jį pakeistų
//(ne sukurtų naują kintamąjį, o pakeistų 'weekDay' reikšmę) į savaitės dieną žodžiu. Vėliau, atspausdink kintamąjį.

let weekDay = new Date().getDay();

switch (weekDay) {
  case 0:
    weekday = "Pirmadienis";
    break;
  case 1:
    weekday = "Antradienis";
    break;
  case 2:
    weekday = "Treciadienis";
    break;
  case 3:
    weekday = "Ketvirtadienis";
    break;
  case 4:
    weekday = "Penktadienis";
    break;
  case 5:
    weekday = "Sestadienis";
    break;
  case 6:
    weekday = "Sekmadienis";
    break;
  default:
    weekday = null;
}
console.log(weekDay);

//Parašykite variable su jūsų vardu.
//Pasiklauskite, jei vardo ilgis trumpesnis nei 5 simboliai - tegul išmeta konsolėje "Short Name", kitaip - "Long Name".

const myName = "Kristina";
myName.length < 5 ? console.log("Short name") : console.log("Long Name");

//Sukurkite du kintamuosius: 'clientAge' ir 'legalAge'. Patikriname ar vartotojas gali vairuoti automobilį
//t.y. clientAge didesnis arba lygus legalAge. Jei taip - išmeta 'Can Drive', kitaip 'Can't drive'.

const clientAge = prompt("Iveskite savo amziu");
const legalAge = 18;

clientAge >= legalAge
  ? console.log("Gali vairuoti")
  : console.log("per Jaunas");

//Ahh, o jeigu antrame pratime įvesti -1 kaip amžių? Darom double ternary operator - t.y. operatorius operatoriuje.
//Pirma paklausiame - jei amžius mažesnis nei 0; arba didesnis nei 120 - išmetame "Invalid Age".
//Jei vis tik ne - tada false statement'e bus dar vienas operatorius su antru pratimo klausimu.

const newClientAge = prompt("Iveskite new amziu");
const newLegalAge = 18;

(newClientAge < 0) | (newClientAge > 120)
  ? console.log("Invalid age")
  : newClientAge >= newLegalAge
  ? console.log("can drive")
  : console.log("two young");

//Sukurkite variable 'phone', kuris būtų lygus 'iPhone'. Taip pat sukurkite variable isIphoneUser,
// kuris turėtų būti prilygintas Boolean reikšmei (t.y. true arba false) priklausomai ar phone yra 'iPhone' ar bet koks kitas.

const phone = "iPhone";
const isPhoneUser = phone === "iPhone";
console.log(isPhoneUser);

//Padaryk, kad kompiuteris 10 kartų paconsole'intų tavo vardą
//(atsimink, konsolė tas pačias eilutes grupuoja ir šalia parašo skaičiuką dažniausiai, vietoj to, kad išmestų kiekvienoje eilutėje).

for (let index = 0; index < 10; index++) {
  console.log("Martynas");
}

//Pakoreguok pirmą pratimą, kad tiek vardas, tiek kiek kartų kartos - būtų kintamieji.
const firstName = "Kristina";
const count = 10;
for (let index = 0; index < count; index++) {
  console.log(index, firstName);
}

//Parašyk for loopą, kuris atspaudins nuo 10 iki 1 countdown konsolėje.

let i = 10;
while (i > 0) {
  i--;
  console.log(i);
}
