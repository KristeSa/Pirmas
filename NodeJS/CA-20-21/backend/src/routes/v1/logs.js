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

const getLogs = async (_, res) => {
  const query =
    "SELECT logs.pet_id, pets.id, pets.name, pets.dob, pets.client_email, logs.description, logs.status FROM logs INNER JOIN pets ON logs.pet_id=pets.id";

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

const postLog = async (req, res) => {
  const pet_id = +mysql.escape(req.body.pet_id).replaceAll("'", "");
  const description = mysql.escape(req.body.description.trim());
  const status = mysql.escape(req.body.status.trim());

  if (!pet_id || !description || !status) {
    return res.status(400).send("Log data is mising").end();
  }

  if (typeof description !== "string" || typeof status !== "string") {
    return res.status(404).send("Log description or status are not strings");
  }

  if (typeof pet_id !== "number" || pet_id < 0 || Number.isNaN(pet_id)) {
    return res.status(400).send("Please provide correct Pet Id");
  }

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    await con.execute(
      `INSERT INTO logs (pet_id, description, status) VALUES (${pet_id}, ${description}, ${status})`
    );

    await con.end();

    res.status(201).send("Log successfully added").end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error(error);
  }
};

router.get("/", getLogs);
router.post("/", postLog);

module.exports = router;
