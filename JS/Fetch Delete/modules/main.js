import { getProducts } from "./getProducts.js";
//import { addProduct } from "./add.js";

const products = await getProducts();

console.log(products);

const renderProducts = () => {
  const productCard = document.querySelector(".products-container");

  products.forEach((element) => {
    const img = document.createElement("img");
    img.src = element.image;
    img.setAttribute("class", "product-image");

    const title = document.createElement("h4");
    title.setAttribute("class", "product-title");
    title.textContent = element.title;

    const price = document.createElement("p");
    price.setAttribute("class", "product-price");
    price.textContent = `${element.price} EUR`;

    const card = document.createElement("div");
    card.setAttribute("class", "product-card");

    const button = document.createElement("button");
    button.setAttribute("class", "delete-button");
    button.textContent = "Ištrinti";

    card.append(img, title, price, button);

    productCard.append(card);
  });
};

renderProducts();
