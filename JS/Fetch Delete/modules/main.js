import { getProducts } from "./getProducts.js";
import { renderProducts } from "./renderProducts.js";

const products = await getProducts();

const onProductDelete = (deletedId) => {
  console.log(products);
  products = products.filter((product) => product.id !== deletedId);

  renderProducts(products);
};
renderProducts(products);

export { onProductDelete };
