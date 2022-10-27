import { onProductDelete } from "./main.js";

const deleteProduct = async () => {
  try {
    const response = await fetch(
      `https://golden-whispering-show.glitch.me/${id}`,
      {
        method: "DELETE",
      }
    );

    const isProductDeleted = response.ok;

    if (isProductDeleted) {
      onProductDelete(idToDelete);
    }
  } catch (error) {
    console.error(error);
  }
};

export { deleteProduct };
