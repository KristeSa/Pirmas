const numbers = [5, 7, 12, 18, 32]
console.log(numbers.reduce((a,v) => a+v))

const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];
console.log(cars.reduce((a, v) => v.length === 3 ? a+1: a,0 ))

const biggestNumber = [12, 16, 14, 18, 20, 25, 35, 5, 74]
console.log(biggestNumber.reduce((a,v) => a > v ? a:v))