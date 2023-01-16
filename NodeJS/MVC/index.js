import express from "express";
import router from "./src/controllers/productController.js";

const app = express();
const PORT = 5_550;

app.use("/products", router);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
