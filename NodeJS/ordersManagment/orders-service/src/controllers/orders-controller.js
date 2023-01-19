import { Router } from "express";
import { createOrder, getOrders } from "../services/orders-services.js";

export const orderRouter = Router();

//let orders = [];

orderRouter.get("/", (_, res) => {
  const orders = getOrders();

  res.send({ orders }).end();
});

orderRouter.post("/", (req, res) => {
  const { name, orderedAt, completedAt, products, totalPrice } = req.body;

  const { order, error } = createOrder({
    name,
    orderedAt,
    completedAt,
    products,
    totalPrice,
  });

  if (!order || error) {
    return res.status(400).send({ error: error.message }).end();
  }

  res.send({ msg: `Order ${name} was created` }).end();
});
