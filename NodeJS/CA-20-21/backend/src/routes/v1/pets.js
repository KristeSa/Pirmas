require("../../config");
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const app = express();

app.use(express.json());
app.use(cors());

const PORT = +process.env.serverPort || 5008;
const MSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port,
};

app.get("/pets", async (req, res) => {
  const query = "SELECT * FROM pets";

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    const result = (await con.execute(query))[0];

    await con.end();

    res.status(201).send(result).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    console.error(error);
  }
});

app.post("/pet", async (req, res) => {
  const name = mysql.escape(req.body.name.trim());
  const dob = mysql.escape(req.body.dob.trim());
  const clientEmail = mysql.escape(req.body.clientEmail.trim());

  if (!name || !dob || !clientEmail) {
    return res.status(400).send("Pet data is mising").end();
  }

  if (typeof name !== "string" || typeof clientEmail !== "string") {
    return res.status(404).send("Pet name or Client Email are not strings");
  }

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    await con.execute(
      `INSERT INTO pets (name, dob, client_email) VALUES (${name}, ${dob}, ${clientEmail})`
    );

    await con.end();

    res.status(201).send("Pet successfully added").end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error(error);
  }
});

app.delete("/pet/:id", async (req, res) => {
  const id = mysql.escape(req.params.id.trim());
  const cleanId = +id.replaceAll("'", "");

  const query = "ALTER TABLE pets MODIFY COLUMN isArchived VALUES (1)";

  if (!cleanId) {
    return res.status(400).send(`Id was not provided`).end();
  }

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    const result = (await con.execute(query))[0];
    await con.end();

    if (!result.affectedRows) {
      return res.status(404).send("Pet is not archieved").end();
    }

    res.status(202).send(`Pet ${cleanId} is archieved`).end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
