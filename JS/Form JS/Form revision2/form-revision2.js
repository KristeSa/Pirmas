//Kai kuriose šalyse reikia eiti į kariuomenę, jei tu tarp 18 ir 30, tačiau, jei neturi kriminalinio įrašo.
//Sukurk programą, kuri su input + radio button pasakytų ar tam žmogui gali reikėti eiti į kariuomenę (h1 elemente).
//Hint: pasirinkite su querySelector tik pažymėtą radio input (aha, yra toks CSS selektorius), ir perskaitykite jo reikšmę.

const form = document.body.querySelector("form");
const ageInput = document.body.querySelector("#age");
const checkbox = document.getElementById("check");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const age = ageInput.value;
  const isChecked = checkbox.checked;

  if (age >= 18 && age <= 30 && !isChecked) {
    document.body.querySelector("h1").textContent = "Keliauk i kariuomene";
  } else {
    document.body.querySelector("h1").textContent = "Neik i kariuomene";
  }
}
