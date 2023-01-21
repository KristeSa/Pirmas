import express from "express";
import Joi from "Joi";
import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import jwt from "jsonwebtoken";

import { MSQL_CONFIG, jwtSecret } from "../../config.js";

export const userRouter = express.Router();

const userSchema = Joi.object({
  full_name: Joi.string().trim(),
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().required(),
});

userRouter.post("/register", async (req, res) => {
  let userData = req.body;

  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    console.log({ error });
    return res.status(400).send({ error: "Incorrect data sent" }).end();
  }

  try {
    const hashedPassword = bcrypt.hashSync(userData.password);

    const con = await mysql.createConnection(MSQL_CONFIG);
    const [data] = await con.execute(`
      INSERT INTO users (full_name, email, password)
      VALUES (${mysql.escape(userData.full_name)}, ${mysql.escape(
      userData.email
    )}, '${hashedPassword}')
      `);
    await con.end();

    return res.send(data).end();
  } catch (error) {
    console.log({ error });
    return res
      .status(500)
      .send({ error: "Unexpected error. Please try again" })
      .end();
  }
});

userRouter.post("/login", async (req, res) => {
  let userData = req.body;

  try {
    userData = await userSchema.validateAsync(userData);
  } catch (error) {
    console.log({ error });
    return res.status(400).send({ error: "Incorrect email or password" }).end();
  }

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);
    const [data] = await con.execute(`
      SELECT * FROM users
      WHERE email = ${mysql.escape(userData.email)}
      `);
    await con.end();

    if (data.length === 0) {
      return res
        .status(400)
        .send({ error: "Incorrect email or password" })
        .end();
    }

    const isAuth = bcrypt.compareSync(userData.password, data[0].password);

    if (isAuth) {
      const token = jwt.sign(
        { id: data[0].id, email: data[0].email },
        jwtSecret
      );

      return res.send({ msg: "Sucsesfully loged in", token });
    }

    return res.status(400).send({ err: "Incorrect email or password" }).end();
  } catch (error) {
    console.log({ error });
    return res
      .status(500)
      .send({ error: "Unexpected error. Please try again" })
      .end();
  }
});
