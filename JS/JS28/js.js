const people = [
    {
      name: "Petras",
      age: "18"
    },
    {
      name: "Jonas",
      age: 15
    },
    {
      name: "Antanas",
      age: 20
    },
    {
      name: "Urtė",
      age: 10
    },
    {
      name: "Diana",
      age: 25
    },
    {
      name: "Ieva",
      age: 16
    }
  ];

  
  
   console.log(people.filter(x=> x.age >= 18))
console.log(people.filter(x=> x.age >= 18).map(x=> x.name))
console.log(people.filter(x=> x.age >= 18).map(x=> x.name).sort())

//Sukurkite funkciją. Ji priims vieną argumentą - array su objektais
//kurie turės du parametrus - name ir price.
// Grąžins - brangiausią ir pigiausią prekes.
//Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje - tik du):
//Pvz:
//iškvietimas: fn([{name: "lemonade", price: 50}, {name: "lime", price: 10}])
//grąžins: {brangiausias: "lemonade", pigausias: "lime"}


const drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 }
]

function fn(items){
  items.sort((a, b) => a.price - b.price)
  return {pigiausias: items[0].name, brangiausias: items[items.length - 1].name}
}

console.log(fn(drinks))