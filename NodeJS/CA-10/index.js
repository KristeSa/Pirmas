const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const URI = process.env.URI;
const PORT = +process.env.PORT || 5005;
const client = new MongoClient(URI);
const DB = process.env.DB;

app.use(express.json());
app.use(cors());

app.get("/users", async (req, res) => {
  try {
    const connection = await client.connect();
    const users = await connection
      .db(DB)
      .collection("user-emails")
      .find()
      .toArray();

    await connection.close();

    res.send({ users }).end();
  } catch (error) {
    res.status(500).send({ message: "Something wrong" }).end();
  }
});

app.post("/user", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send("Insuficient user data").end();
  }

  if (typeof name !== "string" || typeof email !== "string") {
    return res.status(400).send("Wrong type of data").end();
  }

  try {
    const connection = await client.connect();
    const newUsers = await connection
      .db(DB)
      .collection("user-emails")
      .insertOne({
        name,
        email,
      });

    await connection.close();

    res.send({ newUsers }).end();
  } catch (error) {
    res.status(500).send({ message: "Something wrong" }).end();
  }
});

app.get("/comments", async (req, res) => {
  try {
    const connection = await client.connect();
    const comments = await connection
      .db(DB)
      .collection("comments")
      .find()
      .toArray();

    await connection.close();

    res.send({ comments }).end();
  } catch (error) {
    res.status(500).send({ message: "Something wrong" }).end();
  }
});

app.delete("/comments/:id", async (req, res) => {
  const { id } = req.params;
  const { comments, date, user_id } = req.body;

  try {
    const connection = await client.connect();
    const comment = await connection
      .db(DB)
      .collection("comments")
      .deleteOne({ _id: ObjectId(id) }, { $set: { comments, date, user_id } });

    await connection.close();

    res.send({ comment }).end();
  } catch (error) {
    res.status(500).send({ message: "Something wrong" }).end();
  }
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
