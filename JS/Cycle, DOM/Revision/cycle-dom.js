//Su while ciklu pasirašykite, kad Jūsų vardą išvestų į console 3 kartus.

let i = 0;
while (i < 3) {
  console.log("Kristina");
  i++;
}

//Sukurkite kintamąjį (let combo = "").
//Kiekvieną kartą paleidus ciklą į combo prisirašo Jūsų vardas (t.y. while ciklo viduje darytų combo += "Petras" ).
//Sukurkite programą, kur bus kintamasis (let times = 5), kuris nurodys kiek kartų į combo kintamąjį turėtų būti pridėtas Jūsų vardas. Jei times skaičius 0 arba mažiau - vis tiek bent vieną kartą įvyks ciklas ir Jūsų vardą įrašys į combo.
//Pvz:
//times = 0; combo = "Petras"
//imes = 1; combo = "Petras"
//times = 2; combo = "PetrasPetras"
//times = 3; combo = "PetrasPetrasPetras"

let combo = "";
const firstName = "Kristina";
let times = 5;

do {
  combo += firstName;
  times--;
} while (times > 0);
console.log(combo);

//Suskaičiuok su JS koks bus cos(0) (t.y. cos, kai kampas 0 radians).
const calc = Math.cos(0);
console.log(calc);

//sukurk random skaičių tarp 1 ir 5 (įskaitant abu).
const randomNumber = Math.round(Math.random() * 5 + 1);
console.log(randomNumber);

//sukurk random skaičių tarp 5 ir 12 (įskaitant abu).
const randomNumber1 = Math.floor(Math.random() * (12 - 5 + 1) + 5);
console.log(randomNumber1);

//Sukurk programą, kur vartotojui atidarius puslapį, alert išmestų ar jis laimėjo bilietą ar ne.
//Tikimybė laimėti - viena iš penkių. (Hint: čia reikės if-else su math random).

const lotteryTicketNumber = 3;
const randomNumber2 = Math.floor(Math.random() * 5 + 1);

lotteryTicketNumber === randomNumber2
  ? console.log("Laimėjai")
  : console.log("bandyk dar karta");

//Susikurkite projektą, be jokių HTML tag'ų body.
//Su JavaScript sukurkite <h2> elementą su savo vardu ir pridėkite į <body>.

const header = document.createElement("h2");
header.textContent = "Kristina";
document.body.append(header);

//Sukurkite HTML'e <h1> tag'ą su id="name" ir tekstu "unknown".
//Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .

document.body.querySelector("#name").textContent = "Kristina";

//Sukurkite unordered list su trim list item'ais: "Pienas", "Varškė", "Jautiena".
//Su JavaScript pakeiskite paskutinį list item tekstą į "Sūris".

//document.querySelector("li:last-child").textContent = "Suris";

//Ištaisykite klaidą. Nusikopijuokite apačioje esantį kodą ir
//su JavaScript pasikeiskite antrame paragrafe esantčio <span> tekstą - iš 'red' į 'blue':

document.body.querySelector(".bluetext>span").textContent = "blue";

//2. Sukurkite ordered list su trimis list item duota eilės tvarka:
//"BMW group", "VW group" ir "GE".
//Naudodami JavaScript apkeiskite pirmus du sąrašo elementus vietomis.
//Tačiau, kabliukas - negalima JavaScript įrašyti testo (kitaip tariant hard-codinti).
//Pirma Jūs turite pasiimt pirmo ir antro sąrašo elemento reikšmes ir jas išsisaugoti į kintamuosius.

const bmwGroup = document.querySelector("li:first-child");
const vwGroup = document.querySelector("li:nth-child(2)");

bmwGroup.textContent = "vw Group";
vwGroup.textContent = "bmw Group";
