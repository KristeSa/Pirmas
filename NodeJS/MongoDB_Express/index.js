const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const URI = process.env.URI;
const PORT = +process.env.PORT || 5020;
const client = new MongoClient(URI);
const DB = process.env.DB;
const DBCOLLECTION = process.env.DBCOLLECTION;

app.use(express.json());
app.use(cors());

app.get("/users", async (_, res) => {
  const connection = await client.connect();
  const data = await connection
    .db(DB)
    .collection(DBCOLLECTION)
    .find()
    .toArray();
  await connection.close();
  return res.send(data);
});

app.post("/user", async (req, res) => {
  const { firstName, lastName } = req.body || {};
  if (!firstName || !lastName) {
    res.status(400).send("No name provided").end();
    return;
  }

  if (typeof firstName !== "string" || typeof lastName !== "string") {
    res.status(400).send("firstName or lastName are not strings").end();
    return;
  }

  try {
    const connection = await client.connect();
    const dbRes = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .insertOne({ firstName: "Martynas", lastName: "Saveiko" });
    await connection.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .findOne({ _id: ObjectId(id) });

    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.get("/filtered-users", async (req, res) => {
  const { firstName, lastName } = req.query;

  try {
    const connection = await client.connect();
    const data = await connection
      .db(DB)
      .collection(DBCOLLECTION)
      .find({ firstName, lastName });
    console.log(firstName, lastName);
    await connection.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
