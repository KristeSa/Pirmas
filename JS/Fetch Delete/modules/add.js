const productImage = document.querySelector("#image").value.trim();
const productTitle = document.querySelector("#title").value.trim();
const productPrice = +document.querySelector("#price").value;
const productContainer = document.querySelector("products-container");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const addProduct = async () => {
    const response = await fetch("https://golden-whispering-show.glitch.me", {
      method: "POST",
      body: JSON.stringify({
        id: "",
        image: `${productImage}`,
        price: `${productPrice} Eur`,
        title: `${productTitle}`,
      }),
    });

    const product = await response.json();
    productContainer.append(productImage, productPrice);

    await addProduct();
    console.log(product);
  };
});
