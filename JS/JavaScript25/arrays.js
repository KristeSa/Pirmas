const cars = ["BMW", "VW", "Audi"];

cars.forEach((value, i)=> { 
    console.log(i+ ":"+ value)    
});

const friendsNames = ["aNdrius", "AuguStas", "MARtynAs", "jusTIna"];

const newNames = friendsNames.map((x) => x.charAt(0).toLocaleUpperCase() + x.slice(1).toLocaleLowerCase());

console.log(newNames)


const friendsAge = [40, 18, 14, 37];

const newAge = friendsAge.filter(x => x>=18)
    console.log(newAge)


 const cities = ["Vilnius", "Kaunas", "varena", "Klaipeda"]   

 const newCities = cities.find(v => v.charAt(0)==="K")
 console.log(newCities)

 const someCities = cities.some(v => (v.charAt(0) === v.charAt(0).toLocaleLowerCase()))
 console.log(someCities)

 const everyCity = cities.every(v => (v.charAt(0) === v.charCodeAt(0).toLocaleUpperCase))
 console.log(everyCity)

 const allNames = ["Andrius", "Justina", "Martynas", "Augustas"]
 allNames.sort()
 console.log(allNames)

 const andNames = ["Andrius", "Justina", "Martynas", "Augustas"]
 andNames.sort((a,b)=> b > a ? 1 : -1);
  console.log(andNames)

  const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];
numbers.sort((a, b) => b-a)
console.log(numbers)

const array1 = [10, 5, 20, 4];
array1.sort((a, b) => b-a)
console.log(array1[0])