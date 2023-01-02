const express = require("express");
const router = express.Router();

const mysql = require("mysql2/promise");

const MSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port,
};

const getPets = async (_, res) => {
  const query = "SELECT * FROM pets WHERE isArchived = 0";

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    const result = (await con.execute(query))[0];

    await con.end();

    res.status(201).send(result).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    console.error(error);
  }
};

const postPet = async (req, res) => {
  const name = mysql.escape(req.body.name.trim());
  const dob = mysql.escape(req.body.dob.trim());
  const client_email = mysql.escape(req.body.client_email.trim());

  if (!name || !dob || !client_email) {
    return res.status(400).send("Pet data is mising").end();
  }

  if (typeof name !== "string" || typeof client_email !== "string") {
    return res.status(404).send("Pet name or Client Email are not strings");
  }

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    await con.execute(
      `INSERT INTO pets (name, dob, client_email) VALUES (${name}, ${dob}, ${client_email})`
    );

    await con.end();

    res.status(201).send("Pet successfully added").end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error(error);
  }
};

const archievePet = async (req, res) => {
  const id = +mysql.escape(req.params.id).replaceAll("'", "");

  const query = `UPDATE pets SET isArchived = 1 WHERE id = ${id}`;

  if (!id) {
    return res.status(404).send(`Id was not provided`).end();
  }

  if (typeof id !== "number" || id < 0 || Number.isNaN(id)) {
    return res.status(404).send("Please provide correct ID").end();
  }

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    await con.execute(query)[0];

    await con.end();

    res.status(202).send(`Pet ${id} is archieved`).end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error(error);
  }
};

router.get("/", getPets);
router.post("/", postPet);
router.delete("/:id", archievePet);

module.exports = router;
