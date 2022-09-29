class Car {
constructor (carBrand, model, mileage, price, image) {
    this.carBrand = carBrand;
    this.model = model;
    this.mileage = mileage;
    this.price = price;
    this.image = image;
}

    addToList() {
    const carImageBlock = document.createElement("div");
    carImageBlock.className = "card";
    carImageBlock.addEventListener("click", () => alert(`Price ${this.price}`));

    const carImage = document.createElement("img");
    carImage.src = this.image;

    const cardText = document.createElement("h3");
    cardText.innerText = `${this.carBrand} ${this.model}`;

    carImageBlock.append(carImage, cardText);
    document.querySelector("div.wrapper").append(carImageBlock)
    }
}

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
const carBrand = document.getElementById("carbrand").value
const model = document.getElementById("model").value
const mileage = document.getElementById("mileage").value
const price = document.getElementById("price").value
const image = document.getElementById("photo").value

const car = new Car(carBrand, model, mileage, price, image)
car.addToList()
})