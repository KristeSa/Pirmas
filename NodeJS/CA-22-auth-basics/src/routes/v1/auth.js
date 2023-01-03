const express = require("express");
const Joi = require("joi");
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");

const { MSQL_CONFIG } = require("../../config");

const router = express.Router();

const userSchema = Joi.object({
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().required(),
});

router.post("/register", async (req, res) => {
  let userData = req.body;

  try {
    userData = await userSchema.validateAsync(userData);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ err: "Incorrect data sent" }).end();
  }

  try {
    const hashedPassword = bcrypt.hashSync(userData.password);

    const con = await mysql.createConnection(MSQL_CONFIG);
    const [data] = await con.execute(`
    INSERT INTO users (email, password)
    VALUES (${mysql.escape(userData.email)}, '${hashedPassword}')
    `);
    await con.end();

    return res.send(data).end();
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ err: "Unexpected error. Please try again" })
      .end();
  }
});

module.exports = router;
