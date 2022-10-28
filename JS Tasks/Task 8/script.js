/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.read = function () {
    this.a = +prompt("Įveskite a reikšmę", 0);
    this.b = +prompt("Įveskite b reikšmę", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.sub = function () {
    return this.a - this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
  this.div = function () {
    return this.a / this.b;
  };
}

let calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Sub=" + calculator.sub());
console.log("Mul=" + calculator.mul());
console.log("Div=" + calculator.div());

alert("Sum=" + calculator.sum());
alert("Sub=" + calculator.sub());
alert("Mul=" + calculator.mul());
alert("Div=" + calculator.div());
