const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config();
const app = express();

app.use(express.json());

const PORT = +process.env.serverPort;
const msqlConfig = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port,
  //ssl: process.env.sslmode,
};

app.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(msqlConfig);
    console.log("succsess: " + con);
    //await con.end();
  } catch (error) {
    res.status(500).send({ error }).end;
    return console.error(error);
  }

  res.send("Table was created").end();
});

app.post("/table", async (req, res) => {
  const name = req.body?.name.trim();

  if (!name) {
    return res.status(400).send(`Incorrect table name provided: ${name}`).end();
  }

  try {
    const con = await mysql.createConnection(msqlConfig);

    await con.execute(
      `CREATE table ${name}(id int NOT NULL AUTO_INCREMENT, firstName varchar(35), PRIMARY KEY (id))`
    );
    //toDo: use request body

    await con.end();

    res.status(201).send("Table successfully created").end();
  } catch (error) {
    res.status(500).send(error).end;
    return console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
