const express = require("express");
const cors = require("cors");

const PORT = 6000;
const app = express();

app.use(express.json());
app.use(cors());

const cars = ["BMW", "VW", "Porsche"];

app.get("/", (req, res) => {
  res.send({ cars });
  console.log(cars);
});

app.listen(6000, () => console.log("server is listening on PORT 6000"));
