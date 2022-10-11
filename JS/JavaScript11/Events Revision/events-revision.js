//Padaryk, kad paspaudus ant mygtuko - išoktų alert su tavo vardu! (naudoti inline metoda: onclick="")

function sayKristina() {
  alert("Kristina");
}

//Perrašyti pirmą pratimą su addEventListener (ir nuo šiol naudoti būtent jį ;) ).

document.getElementById("second").addEventListener("click", sayKristina);

//Padaryti, kad paspaudus ant mygtuko, po apačia atsirastų paragrafe tekstas apie jus.
document.getElementById("second").addEventListener("click", sayText);

function sayText() {
  document.body.querySelector("p").textContent = "lorem ipsum";
}

//Sukurk programą, kurioje bus h1 tekstas su skaičiumi ir mygtukas. Paspaudus ant mygtuko, skaičius padidėja (+1).
let counter = 0;
document.body.querySelector("#count").addEventListener("click", () => {
  counter++;
  document.body.querySelector("h1").textContent = counter;
});

//Sukurk programą, kurioje ilgas paragrafas. Bandant kopijuoti kodą - išmeta, kad negalima kopijuoti.

document.body.querySelector("#p-second").addEventListener("copy", () => {
  alert("Don't copy");
});

//Sukurk programą, kur paspaudus ant mygtuko - sugeneruoja random skaičių nuo 1 iki 100 ir jį išmeta kaip h2 tekstą.

document.getElementById("third").addEventListener("click", () => {
  function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    document.body.querySelector("h2").textContent = randomNumber;
  }
  generateRandomNumber();
});

//Sukurk programą, kurioje du mygtukai - "Turiu bent 18 metų" ir "Mažiau nei 18 metų".
//Jei paspaudžia ant pirmo mygtuko - išmeta h1 tekstą "Alus". Jei antrą paspaudžia - išmeta alert su "nepilnametis - nieko neturim".

document.getElementById("legalAge").addEventListener("click", () => {
  document.body.querySelector("h3").textContent = "Alus";
});

document.getElementById("tooYoung").addEventListener("click", () => {
  alert("nepilnametis - nieko neturim");
});

//Sukurk programą, kuri sugeneruoja random skaičių nuo 1 iki 3, kai tik užsikrauna puslapis.
//Vartotojas skaičiaus nemato (bet jūs pasiconsole'inkit). Ekrane - trys mygtukai (1, 2, 3).
// Vartotojas turi spėti koks random skaičius susigeneravo. Jei atspėja - išoka alert("Yay"), jei ne - alert("Nay").

let randomNumber2 = Math.floor(Math.random() * 3) + 1;
console.log(randomNumber2);

function generateRandomNumbertwo() {}
generateRandomNumbertwo();

document.body
  .querySelector("#one")
  .addEventListener("click", () =>
    randomNumber2 === 1 ? alert("Yay") : alert("Nay")
  );
document.body
  .querySelector("#two")
  .addEventListener("click", () =>
    randomNumber2 === 2 ? alert("Yay") : alert("Nay")
  );
document.body
  .querySelector("#three")
  .addEventListener("click", () =>
    randomNumber2 === 3 ? alert("Yay") : alert("Nay")
  );

//Parašykite programą, kurioje būtų tekstas "Nespauskite mygtuko".
//Vartotojui paspaudus bet kokį mygtuką turi pasikeisti tekstas į "Neklausote manęs".

document.body.querySelector("#donotpush").addEventListener("click", () => {
  document.body.querySelector("#donotpush").textContent = "Neklausote manęs";
});

//Sukurkite h1, jam duokite 150vh aukštį ir 150vh line-height.
//Jame įrašykite "Nejudinkite pelytės". Jeigu vartotojas pajudins pelytę - pakeiskite tekstą į "Kiek galima neklausyti?!".

document.body.querySelector("h5").addEventListener("mousemove", (event) => {
  document.body.querySelector("h5").textContent = "Kiek galima neklausyti?!";
});
