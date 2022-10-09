//Sukurkite kino teatro kainos apskaičiavimo platformą.
//Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS apskaičiuoja kainą ir išmeta ją h1 elemente.
//Standartinis bilietas – 6eu, iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60.
//Variable turi būti aprašyti viršuj, kad būtų lengva keist.

const ageInput = document.body.querySelector("#age");

function handleFormSubmit(event) {
  event.preventDefault();
  const ticketPrice = 6;
  const age = Number(ageInput.value);

  if (age < 16) {
    document.body.querySelector("h1").textContent = (ticketPrice / 2).toFixed(
      2
    );
  } else if (age >= 60) {
    document.body.querySelector("h1").textContent = (
      (1 / 3) *
      ticketPrice
    ).toFixed(2);
  } else {
    document.body.querySelector("h1").textContent = ticketPrice.toFixed(2);
  }
}

document.body
  .querySelector("form")
  .addEventListener("submit", handleFormSubmit);
