const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const URI = process.env.URI;
const PORT = +process.env.PORT || 5010;
const client = new MongoClient(URI);
const DB = process.env.DB;
const DBCOLLECTION = process.env.DBCOLLECTION;

app.use(express.json());

app.get("/order", async (_, res) => {
  const connection = await client.connect();
  const order = await connection
    .db(DB)
    .collection(DBCOLLECTION)
    .find()
    .toArray();
  await connection.close();
  return res.send(order);
});

app.post("/order", async (req, res) => {
  const { comments, dateCreated, dateFullfilled, products } = req.body;

  if (!comments || !dateCreated || !dateFullfilled || !products) {
    res.status(400).send("Insuficient order data").end();
    return;
  }

  try {
    const connection = await client.connect();
    const order = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .insertOne({ comments, dateCreated, dateFullfilled, products });
    await connection.close();
    return res.send(order);
  } catch (error) {
    res.status(500).send({ error }).end();
  }
});

app.patch("/order/:id", async (req, res) => {
  const { id } = req.params;
  const { comments, dateCreated, dateFullfilled, products } = req.body;

  if (!comments || !dateCreated || !dateFullfilled || !products) {
    res.status(400).send("Insuficient order data").end();
    return;
  }

  try {
    const connection = await client.connect();
    const order = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { comments, dateCreated, dateFullfilled, products } }
      );

    await connection.close();
    return res.send(order).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.delete("/order/:id", async (req, res) => {
  const { id } = req.params;
  const { comments, dateCreated, dateFullfilled, products } = req.body;

  if (!comments || !dateCreated || !dateFullfilled || !products) {
    res.status(400).send("Insuficient order data").end();
    return;
  }

  try {
    const connection = await client.connect();
    const order = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .deleteOne(
        { _id: ObjectId(id) },
        { $set: { comments, dateCreated, dateFullfilled, products } }
      );

    await connection.close();
    return res.send(order).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.get("/orders", async (req, res) => {
  const { deliveryType } = req.body;

  //prideti if
  try {
    const connection = await client.connect();
    const ordersCount = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .count({ deliveryType });
    const orders = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find()
      .toArray();

    await connection.close();

    res.send({ ordersCount, orders });
  } catch (err) {
    res.status(500).send({ err }).end();
    throw Error(err);
  }
});

app.post("/orders", async (req, res) => {
  const { postOrders } = req.body;

  if (!Array.isArray(postOrders)) {
    return res
      .status(400)
      .send({ message: "postOrders is not an array" })
      .end();
  }

  try {
    const connection = await client.connect();
    const newOrders = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .insertMany(postOrders);

    await connection.close();

    res.send(newOrders).end();
  } catch (error) {
    res.status(500).send({ error }).end();
  }
});

app.patch("/orders", async (req, res) => {
  try {
    const connection = await client.connect();
    const orders = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .updateMany(
        {
          products: "Serum",
        },
        { $set: { dateFullfilled: "2022-11-24" } }
      );

    await connection.close();
    return res.send(orders).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.delete("/orders", async (req, res) => {
  try {
    const connection = await client.connect();
    const orders = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .deleteMany({ products: "Moisturiser" });

    await connection.close();
    return res.send(orders).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
