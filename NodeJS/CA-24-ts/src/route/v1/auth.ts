import { config } from "dotenv";
config();

import express from "express";
import Joi from "Joi";
import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.jwtSecret;
const MSQL_CONFIG = process.env.MSQL_CONFIG

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
    console.log({ data });
    return res.send(data).end();
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ err: "Unexpected error. Please try again" })
      .end();
  }
});

router.post("/login", async (req, res) => {
  let userData = req.body;

  try {
    userData = await userSchema.validateAsync(userData);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ err: "Incorrect email or password" }).end();
  }

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);
    const [data] = await con.execute(`
      SELECT * FROM users
      WHERE email = ${mysql.escape(userData.email)}
      `);
    await con.end();

    // if (!data.length) {
    //   return res.status(400).send({ err: "Incorrect email or password" }).end();
    // }

    const isAuth = bcrypt.compareSync(userData.password, data[0].password);

    if (isAuth) {
      const token = jwt.sign(
        { id: data[0].id, email: data[0].email },
        jwtSecret
      );

      return res.send({ msg: "Sucsesfully loged in", token });
    }

    return res.status(400).send({ err: "Incorrect email or password" }).end();
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ err: "Unexpected error. Please try again" })
      .end();
  }
});

export default router;
