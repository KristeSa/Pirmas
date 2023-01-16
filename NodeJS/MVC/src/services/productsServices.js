import { Product } from "../models/Product.js";

const products = [
  new Product(16, "book", true),
  new Product(20, "toy", false),
  new Product(38, "magazine", true),
];

export const getProducts = (_, res) => {
  res.send({ products }).end();
};
