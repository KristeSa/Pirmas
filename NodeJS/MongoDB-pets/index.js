const { MongoClient } = require("mongodb");
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

app.get("/pets", async (_, res) => {
  const connection = await client.connect();
  const data = await connection
    .db(DB)
    .collection(DBCOLLECTION)
    .find()
    .toArray();
  await connection.close();
  return res.send(data);
});

app.post("/pet", async (req, res) => {
  const { name, type, age } = req.body;
  if (!name || !type || !age) {
    res.status(400).send("No name provided").end();
    return;
  }

  if (typeof name !== "string" || typeof type !== "string") {
    res.status(400).send("firstName or lastName are not strings").end();
    return;
  }

  if (typeof age !== "number") {
    res.status(400).send("age is not a number").end();
    return;
  }
  try {
    const connection = await client.connect();
    const dbRes = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .insertOne({ name, type, age });
    await connection.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.get("/pets/:types/:order?", async (req, res) => {
  const connection = await client.connect();
  const data = await connection
    .db(DB)
    .collection(DBCOLLECTION)
    .find({ type: { $in: req.params.types?.split(",") } })
    .sort({ age: req.params.order?.toLowerCase() === "dsc" ? -1 : 1 })
    .toArray();
  await connection.close();
  return res.send(data);
});

// app.get("/pets/type/:type", async (req, res) => {
//   const { type } = req.params;
//   const connection = await client.connect();
//   const data = await connection
//     .db(DB)
//     .collection(DBCOLLECTION)
//     .find({ type })
//     .toArray();
//   await connection.close();
//   return res.send(data);
// });

// app.get("/pets/byoldest", async (req, res) => {
//   const connection = await client.connect();
//   const data = await connection
//     .db(DB)
//     .collection(DBCOLLECTION)
//     .find()
//     .sort({ age: -1 })
//     .toArray();
//   await connection.close();
//   return res.send(data);
// });

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
