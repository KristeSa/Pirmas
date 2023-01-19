import express, { Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { orderRouter } from "./orders-service/src/controllers/orders-controller.js";
// import { Product } from "./orders-service/src/models/Product.js";
// import {
//   createProduct,
//   getProducts,
// } from "./orders-service/src/services/products-services.js";

dotenv.config();

const app = express();
const PORT = +process.env.PORT || 3405;

app.use(express.json());
app.use(cors());

app.use("/orders", orderRouter);
// createProduct({
//   name: "book",
//   price: 15,
//   isAvailable: true,
//   imageURL:
//     "http://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png",
// });

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
