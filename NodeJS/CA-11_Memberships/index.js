const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const URI = process.env.URI;
const PORT = +process.env.PORT || 5040;
const client = new MongoClient(URI);
const DB = process.env.DB;

app.use(express.json());
app.use(cors());

app.get("/memberships", async (req, res) => {
  try {
    const connection = await client.connect();
    const memberships = await connection
      .db(DB)
      .collection("services")
      .find()
      .toArray();
    await connection.close();

    res.send({ memberships }).end();
  } catch (error) {
    res.status(500).send({ message: "Something wrong" }).end();
  }
});

app.post("/membership", async (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    return res.status(400).send("Insuficient membership data").end();
  }

  if (typeof name !== "string" || typeof description !== "string") {
    return res.status(400).send("Name or description are not strings").end();
  }

  if (typeof price !== "number") {
    return res.status(400).send("Price must be a number").end();
  }

  try {
    const connection = await client.connect();
    const newMembership = await connection
      .db(DB)
      .collection("services")
      .insertOne({ name, description, price });
    await connection.close();

    res.send({ newMembership }).end();
  } catch (error) {
    res.status(500).send({ message: "Something wrong" }).end();
  }
});

app.delete("/membership/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  try {
    const connection = await client.connect();
    const deletedMembership = await connection
      .db(DB)
      .collection("services")
      .deleteOne({ _id: ObjectId(id) }, { $set: { name, description, price } });

    await connection.close();

    res.send({ deletedMembership }).end();
  } catch (error) {
    res.status(500).send({ message: "Could not delete membership" }).end();
  }
});

app.get("/users/:order?", async (req, res) => {
  try {
    const connection = await client.connect();
    const orderedUsers = await connection
      .db(DB)
      .collection("users")
      .find()
      .sort({ name: req.params.order?.toLowerCase() === "dsc" ? -1 : 1 })
      .toArray();

    const services = await connection
      .db(DB)
      .collection("services")
      .find()
      .toArray();

    const usersWithMemberships = orderedUsers.map((user) => {
      const { name } = services.find(
        (name) => name._id.toString() === user.service_id
      );

      return { ...user, service_id: name };
    });

    // const userMembershipsCursor = orderedUsers.aggregate(pipeline);

    // for await (const doc of userMembershipsCursor) {
    //   usersWithMembershipsName.push(doc);
    // }

    await connection.close();

    res.send({ usersWithMemberships }).end();
  } catch (error) {
    res.status(500).send({ message: "Something wrong" }).end();
    throw Error(error);
  }
});

app.post("/user", async (req, res) => {
  const { name, surname, email, service_id } = req.body;

  if (!name || !surname || !email || !service_id) {
    return res.status(400).send("Insuficient user data").end();
  }

  if (
    typeof name !== "string" ||
    typeof surname !== "string" ||
    typeof email !== "string"
  ) {
    return res
      .status(400)
      .send("Name, surname or email provided incorectly")
      .end();
  }

  try {
    const connection = await client.connect();
    const newUser = await connection
      .db(DB)
      .collection("users")
      .insertOne({ name, surname, email, service_id });
    await connection.close();

    res.send({ newUser }).end();
  } catch (error) {
    res.status(500).send({ message: "Something wrong" }).end();
  }
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
