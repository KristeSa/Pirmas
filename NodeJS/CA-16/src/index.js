require("./config");
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

app.get("/cars", async (req, res) => {
  const query = "SELECT * FROM cars";

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

app.get("/cars/:id", async (req, res) => {
  const id = mysql.escape(req.params.id.trim());
  const carId = +id.replaceAll("'", "");
  const query = `SELECT * FROM cars WHERE id = ${carId}`;

  if (carId < 0 || Number.isNaN(carId) || typeof carId !== "number") {
    return res.status(404).send("Car id is mising").end();
  }

  if (typeof carId !== "number" || carId < 0) {
    return res.status(404).send("Please provide valid id");
  }

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    const result = (await con.execute(query))[0];

    if (!result.length) {
      return res.status(404).send(`Id ${carId} not found`).end();
    }

    await con.end();

    res.status(201).send(result).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    console.error(error);
  }
});

app.post("/car", async (req, res) => {
  const title = mysql.escape(req.body.title.trim());
  const image = mysql.escape(req.body.image.trim());
  const price = +mysql.escape(req.body.price).replaceAll("'", "");
  const numberplates = mysql.escape(req.body.numberplates.toUpperCase().trim());

  if (!title || !image || !price || !numberplates) {
    return res.status(400).send("Car data is mising").end();
  }

  if (
    typeof title !== "string" ||
    typeof image !== "string" ||
    typeof numberplates !== "string"
  ) {
    return res
      .status(404)
      .send("Car title, image or numberplates are not strings");
  }

  if (typeof price !== "number" || Number.isNaN(price)) {
    return res.status(404).send("Car price is not a number");
  }

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    await con.execute(
      `INSERT INTO cars (title, image, price, numberplates) VALUES (${title}, ${image}, ${price}, ${numberplates})`
    );

    await con.end();

    res.status(201).send("Car successfully added").end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error(error);
  }
});

app.delete("/car/:id", async (req, res) => {
  const id = mysql.escape(req.params.id.trim());
  const cleanId = +id.replaceAll("'", "");

  if (!cleanId) {
    return res.status(400).send(`Id was not provided`).end();
  }

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    const result = (
      await con.execute(`DELETE FROM cars WHERE id = ${cleanId}`)
    )[0];
    await con.end();

    if (!result.affectedRows) {
      return res.status(404).send("Car is not deleted").end();
    }

    res.status(202).send(`Car ${cleanId} successfully deleted`).end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
