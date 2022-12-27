const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config();
const app = express();

app.use(express.json());

const PORT = +process.env.serverPort || 5020;
const msqlConfig = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port,
};

//GET "/" - išmeta, kad serveris funkcionuoja.
app.get("/", async (_, res) => {
  try {
    const con = await mysql.createConnection(msqlConfig);
    res.send(`Server is running on ${PORT}`);
    await con.end();
  } catch (error) {
    res.status(500).send({ error }).end();
    console.error(error);
  }
});

//GET "/shirts" - išmeta 10 pigiausių marškinių (naudojam MySQL LIMIT ir ORDER BY).

app.get("/shirts", async (_, res) => {
  try {
    const con = await mysql.createConnection(msqlConfig);

    const result = await con.execute(
      `SELECT brand, model, size, price FROM shirts ORDER by price LIMIT 0, 10`
    );

    await con.end();

    res.status(201).send(result).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    console.error(error);
  }
});

//POST "/shirts" - įrašo vienus marškinius.

app.post("/shirt", async (req, res) => {
  const { brand, model, price } = req.body;

  if (!brand || !model || !price) {
    return res.status(400).send(`Product data is mising`).end();
  }

  try {
    const con = await mysql.createConnection(msqlConfig);

    await con.execute(
      `INSERT INTO shirts (brand, model, price) VALUES ('${brand}', '${model}', '${price}')`
    );

    await con.end();

    res.status(201).send("Product successfully inserted").end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error(error);
  }
});

//GET "*" - išmeta, kad tokio puslapio nėra.

app.get("/*", async (_, res) => {
  res.status(404).send({ message: "Page does not exist" }).end();
});

//Pakoreguojame GET "/shirts", kad leistų pagal dydį filtruoti ("/shirts/:size") ir grąžintų 10 pigiausių to dydžio'o.
//Tačiau jei dydis neparašytas - grąžintų, kaip ir anksčiau, visų dydžių 10 pigiausių.

app.get("/shirts", async (req, res) => {
  const size = req.query.size;
  const limit = req.query.limit;

  const shirtquerry = size
    ? `SELECT * FROM shirts WHERE size='${size}' ORDER by price LIMIT '${limit}`
    : `SELECT brand, model, size, price FROM shirts ORDER by price`;

  try {
    const con = await mysql.createConnection(msqlConfig);

    const result = await con.execute(shirtquerry);

    await con.end();
    res.send(result).end();
  } catch (error) {
    res.status(500).send("error").end();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
