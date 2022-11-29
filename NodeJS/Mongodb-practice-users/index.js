const { MongoClient } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const URI = process.env.URI;
const PORT = +process.env.PORT || 5040;
const client = new MongoClient(URI);
const DB = process.env.DB;
const DBCOLLECTION = process.env.DBCOLLECTION;

app.use(express.json());
app.use(cors());

app.get("/:firstName", async (req, res) => {
  const { firstName } = req.params;
  const pipeline = [
    { $match: { firstName } },
    { $group: { _id: "$firstName", orders: { $sum: "$price" } } },
  ];

  const docs = [];

  if (!firstName) {
    res.status(400).send("No firstname provided").end();
    return;
  }

  if (typeof firstName !== "string") {
    res.status(400).send("firstName is not a string").end();
    return;
  }

  const connection = await client.connect();

  const uniqueNames = await connection
    .db(DB)
    .collection(DBCOLLECTION)
    .distinct("firstName");

  const firstNameCount = await connection
    .db(DB)
    .collection(DBCOLLECTION)
    .count({ firstName });

  const data = await connection
    .db(DB)
    .collection(DBCOLLECTION)
    .find({ firstName })
    .toArray();

  const aggCursor = await connection
    .db(DB)
    .collection(DBCOLLECTION)
    .aggregate(pipeline);

  for await (const doc of aggCursor) {
    docs.push(doc);
  }

  await connection.close();

  res.send({ uniqueNames, firstNameCount, docs, data }).end();
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
