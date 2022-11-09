const express = require("express");
const cors = require("cors");
const { application } = require("express");

const PORT = 5050;
const app = express();

app.use(express.json());
app.use(cors());

const userNames = [
  { firstName: "Kristina", lastName: "Saveiko" },
  { firstName: "Andrius", lastName: "Saveiko" },
  { firstName: "Saule", lastName: "Vilyte" },
  { firstName: "Mantas", lastName: "Slekys" },
];

app.get("/", (req, res) => {
  res.send(userNames);
});

app.post("/", (req, res) => {
  const firstName = req.body?.firstName;
  const lastName = req.body?.lastName;

  res.send({ firstName, lastName });

  const fullName = { firstName, lastName };
  userNames.push(fullName);
});

app.listen(PORT);
