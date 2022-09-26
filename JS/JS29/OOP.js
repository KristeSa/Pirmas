function Car(brand, model, engine, basePrice){
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = basePrice
    
    this.getPrice = function () {
      let additionalPrice = 0;
        if (this.engine === "electric") {
        additionalPrice = 10000; }
        else if (this.engine === "diesel") {
        additionalPrice = 5000; }
        return this.basePrice + additionalPrice;
 } 
 this.turnOn = function () {
    alert("Vroom")
} 
}

const vw = new Car("VW", "Golf", "electric", 10000)
console.log(vw.getPrice())
vw.turnOn()