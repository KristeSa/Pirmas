const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const URI = process.env.URI;
const PORT = +process.env.PORT || 5030;
const client = new MongoClient(URI);
const DB = process.env.DB;
const DBCOLLECTION = process.env.DBCOLLECTION;

app.use(express.json());
app.use(cors());

app.get("/categories", async (req, res) => {
  const connection = await client.connect();
  const data = await connection
    .db(DB)
    .collection("categories")
    .find()
    .toArray();
  await connection.close();

  res.send(data).end();
});

app.get("/products", async (req, res) => {
  const connection = await client.connect();
  const data = await connection.db(DB).collection("products").find().toArray();
  await connection.close();

  res.send(data).end();
});

app.get("/categoryvalue", async (req, res) => {
  const docs = [];

  const pipeline = [
    { $match: {} },
    { $group: { _id: "$category", total: { $sum: "$price" } } },
  ];

  const connection = await client.connect();
  const data = await connection.db(DB).collection("products").find().toArray();

  const aggCursor = await connection
    .db(DB)
    .collection("products")
    .aggregate(pipeline);

  for await (const doc of aggCursor) {
    docs.push(doc);
  }

  await connection.close();

  res.send(docs).end();
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
