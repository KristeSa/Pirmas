require("../../config");
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const app = express();

app.use(express.json());
app.use(cors());

const PORT = +process.env.serverPort || 5070;
const MSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port,
};

const getMeds = async (_, res) => {
  const query = "SELECT * FROM medications";

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

const postMeds = async (req, res) => {
  const name = mysql.escape(req.body.name.trim());
  const description = mysql.escape(req.body.description.trim());

  if (!name || !description) {
    return res.status(400).send("Medication data is mising").end();
  }

  if (typeof name !== "string" || typeof description !== "string") {
    return res
      .status(404)
      .send("Medication name or description are not strings");
  }

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    await con.execute(
      `INSERT INTO medications (name, description) VALUES (${name}, ${description})`
    );

    await con.end();

    res.status(201).send("Medication successfully added").end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error(error);
  }
};

module.exports = { getMeds, postMeds };
