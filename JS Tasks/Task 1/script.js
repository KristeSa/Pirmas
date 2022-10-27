/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const userWeight = Number(document.querySelector("#search").value);
const weightOutput = document.querySelector("#output");

function calcWeight() {
  const weightInLb = (userWeight * 2.2046).toFixed(2);
  console.log(weightInLb);
  //   console.log(weightInLb);
  //   const weightInGrams = (userWeight / 0.001).toFixed(2);
  //   const weightInOz = (userWeight * 35.274).toFixed(2);

  const printWeightInLB = document.createElement("p");
  //   const printWeightInGrams = document.createElement("p");
  //   const printWeightInOz = document.createElement("p");

  printWeightInLB.textContent = weightInLb;
  //   printWeightInGrams.textContent = weightInGrams;
  //   printWeightInOz.textContent = weightInOz;

  weightOutput.append(printWeightInLB);
  //return printWeightInLB, printWeightInGrams, printWeightInOz;
}
