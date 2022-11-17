const { MongoClient } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const URI = process.env.URI;
const PORT = +process.env.PORT || 5050;
const client = new MongoClient(URI);
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (_, res) => {
  const con = await client.connect();
  const data = await con
    .db("dbname")
    .collection("collectionName")
    .find()
    .toArray();
  await con.close();
  return res.send(data);
});

app.listen(PORT);
