class Product {
  price;
  unitsAvailable;

  constructor(price, unitsAvailable) {
    this.price = price;
    this.unitsAvailable = unitsAvailable;
  }

  getSumRevenue() {
    return this.price * this.unitsAvailable;
  }
}

const shirt = new Product(30, 120);

console.log(shirt.getSumRevenue());
