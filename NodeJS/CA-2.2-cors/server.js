const express = require("express");
const cors = require("cors");

const PORT = 5005;
const app = express();

app.use(express.json());
app.use(cors());

const cars = ["BMW", "VW", "Porsche"];

app.get("/cars", (req, res) => {
  res.send(cars);
  console.log(cars);
});

app.listen(5005, () => console.log("server is listening on PORT 5005"));
