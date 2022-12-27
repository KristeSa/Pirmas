const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config();
const app = express();

app.use(express.json());

const PORT = +process.env.serverPort || 5005;
const msqlConfig = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port,
};

app.get("/items", async (req, res) => {
  const limit = mysql.escape(req.query.limit);
  const cleanLimit = +limit.replaceAll("'", "");

  if (
    typeof cleanLimit !== "number" ||
    cleanLimit <= 0 ||
    Number.isNaN(cleanLimit)
  ) {
    return res
      .status(400)
      .send({ error: `Limit ${cleanLimit} is incorrect` })
      .end();
  }

  try {
    const con = await mysql.createConnection(msqlConfig);

    const result = await con.execute(`SELECT * FROM items LIMIT ${cleanLimit}`);

    await con.end();

    res.status(201).send(result).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    console.error(error);
  }
});

app.post("/item", async (req, res) => {
  const title = mysql.escape(req.body?.title.trim());

  if (!title) {
    return res.status(400).send(`Item title is mising`).end();
  }

  try {
    const con = await mysql.createConnection(msqlConfig);

    await con.execute(`INSERT INTO items (title) VALUES (${title})`);

    await con.end();

    res.status(201).send("Item successfully inserted").end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error(error);
  }
});

app.delete("/items/:id", async (req, res) => {
  const id = mysql.escape(req.params.id.trim());
  const cleanId = +id.replaceAll("'", "");

  if (!cleanId) {
    return res.status(400).send(`Id was not provided`).end();
  }

  try {
    const con = await mysql.createConnection(msqlConfig);

    const result = (
      await con.execute(`DELETE FROM items WHERE id = ${cleanId}`)
    )[0];
    await con.end();

    if (!result.affectedRows) {
      return res.status(404).send("Item is not deleted").end();
    }

    res.status(202).send(`Item ${cleanId} successfully deleted`).end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
