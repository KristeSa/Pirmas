import { deleteProduct } from "./deleteProduct.js";

const renderProducts = (products) => {
  const productCard = document.querySelector(".products-container");

  products.forEach((product) => {
    const img = document.createElement("img");
    img.src = product.image;
    img.setAttribute("class", "product-image");

    const title = document.createElement("h4");
    title.setAttribute("class", "product-title");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.setAttribute("class", "product-price");
    price.textContent = `${product.price} EUR`;

    const card = document.createElement("div");
    card.setAttribute("class", "product-card");

    const button = document.createElement("button");
    button.setAttribute("id", "delete-button");
    button.textContent = "Ištrinti";
    button.addEventListener("click", () => deleteProduct(id));

    card.id = `product-${id}`;

    card.append(img, title, price, button);

    productCard.append(card);
  });
};

export { renderProducts };
