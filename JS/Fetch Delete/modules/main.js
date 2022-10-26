import { getProducts } from "./getProducts.js";

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
    button.setAttribute("id", "delete-button");
    button.textContent = "Ištrinti";

    card.append(img, title, price, button);

    productCard.append(card);
  });
};

renderProducts();

const deleteButton = document.querySelector("#delete-button");

const deleteProduct = async () => {
  try {
    const response = await fetch("https://golden-whispering-show.glitch.me/2", {
      method: "DELETE",
    });

    const isProductDeleted = response.ok;

    if (isProductDeleted) {
      document.body.querySelector(".products-container").innerHTML = "";
      renderProducts();
    }
  } catch (error) {
    console.error(error);
  }
};

deleteButton.addEventListener("click", deleteProduct);
