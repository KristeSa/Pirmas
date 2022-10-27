/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
function handleFormSubmit(event) {
  event.preventDefault();
  const userWeight = Number(document.getElementById("search").value);
  const weightOutput = document.querySelector("#output");

  const weightInLb = Number((userWeight * 2.2046).toFixed(2));
  const weightInGrams = Number((userWeight / 0.001).toFixed(2));
  const weightInOz = Number((userWeight * 35.274).toFixed(2));

  const printWeightInLB = document.createElement("p");
  const printWeightInGrams = document.createElement("p");
  const printWeightInOz = document.createElement("p");

  printWeightInLB.textContent = `You weight ${weightInLb} Lb`;
  printWeightInGrams.textContent = `You weight ${weightInGrams} g`;
  printWeightInOz.textContent = `You weight ${weightInOz} oz`;

  weightOutput.append(printWeightInLB, printWeightInGrams, printWeightInOz);
}

document.querySelector("form").addEventListener("submit", handleFormSubmit);
