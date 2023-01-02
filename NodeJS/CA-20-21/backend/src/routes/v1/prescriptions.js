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

const getPrescriptions = async (_, res) => {
  const query =
    "SELECT pets.id, pets.name, pets.dob, pets.client_email, medications.id, medications.name, medications.description, prescriptions.medication_id, prescriptions.pet_id, prescriptions.comment FROM prescriptions INNER JOIN pets ON pets.id=prescriptions.pet_id INNER JOIN medications ON medications.id=prescriptions.medication_id ";

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

const postPrescription = async (req, res) => {
  const medication_id = +mysql
    .escape(req.body.medication_id)
    .replaceAll("'", "");
  const pet_id = +mysql.escape(req.body.pet_id).replaceAll("'", "");
  const comment = mysql.escape(req.body.comment.trim());

  const query = `INSERT INTO prescriptions (medication_id, pet_id, comment) VALUES (${medication_id}, ${pet_id}, ${comment})`;

  if (!medication_id || !pet_id || !comment) {
    return res.status(400).send("Prescription data is mising").end();
  }

  if (typeof comment !== "string") {
    return res.status(404).send("Medication comment is not strings");
  }

  if (typeof pet_id !== "number" || pet_id < 0 || Number.isNaN(pet_id)) {
    return res.status(400).send("Please provide correct Pet Id");
  }

  if (
    typeof medication_id !== "number" ||
    medication_id < 0 ||
    Number.isNaN(medication_id)
  ) {
    return res.status(400).send("Please provide correct Medication Id");
  }

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    await con.execute(query)[0];

    await con.end();

    res.status(201).send("Prescription successfully added").end();
  } catch (error) {
    res.status(500).send(error).end();
    return console.error(error);
  }
};

router.get("/", getPrescriptions);
router.post("/", postPrescription);

module.exports = router;
