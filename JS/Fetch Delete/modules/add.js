document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const productImage = document.querySelector("#image").value;
  const productTitle = document.querySelector("#title").value.trim();
  const productPrice = document.querySelector("#price").value;

  const newProduct = {
    image: productImage,
    price: productPrice,
    title: productTitle,
  };

  const response = await fetch("https://golden-whispering-show.glitch.me", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
});
