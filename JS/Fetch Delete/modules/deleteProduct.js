const deleteButton = document.querySelector("#delete-button");

const deleteProduct = async () => {
  try {
    const response = await fetch("https://golden-whispering-show.glitch.me/2", {
      method: "DELETE",
    });

    const isProductDeleted = response.ok;

    if (isProductDeleted) {
      document.body.querySelector(".products-container").innerHTML = "";
      //renderProducts();
    }
  } catch (error) {
    console.error(error);
  }
};

deleteButton.addEventListener("click", deleteProduct);
