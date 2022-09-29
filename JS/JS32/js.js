//Prisimename darbą su masyvais: sukurkite funkciją, kuri priims masyvą ir
// išfiltruos visus pasikartojančius skaičius bei šį masyvą grąžins atgal.
//paduodu: [1, 3, 3, 5, 5, 5]
//grąžina: [1, 3, 5]

const removeDuplicates = arr => [...new Set(arr)];
console.log(removeDuplicates([1, 3, 3, 5, 5, 5]));