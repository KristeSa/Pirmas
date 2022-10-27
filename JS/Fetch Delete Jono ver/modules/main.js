import { getProducts } from "./getProducts.js";
import { renderProducts } from "./renderProducts.js";

const products = await getProducts();

console.log(products);

const onProductDelete = (deletedID) => {
  products = products.filter((product) => product.id !== deletedID);

  renderProducts(products);
};

export { onProductDelete };
