// document.body.innerHTML = "<h2>Kristina</h2>";

// Sukurkite HTML'e <h1> tag'ą su id="name" ir tekstu "unknown".
// Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .

// const firstName = "Kriste";
// document.getElementById("name").textContent = firstName;

// let elements = document.querySelector("li:last-child").textContent = "suris";

//let elements = document.querySelector("p:nth-child(3) span").style.color = "blue"



const firstItem = document.querySelector("li:first-child");
const secondItem = document.querySelector("li:nth-child(2)");

const bmw_group = firstItem.textContent
const vw_group = secondItem.textContent

firstItem.textContent = vw_group
secondItem.textContent = bmw_group


