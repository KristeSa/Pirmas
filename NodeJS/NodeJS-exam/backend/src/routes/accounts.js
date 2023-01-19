import { Router } from "express";
import mysql from "mysql2/promise";
import { MSQL_CONFIG, jwtSecret } from "../../config.js";
import jwt from "jsonwebtoken";

export const accountsRouter = Router();

const TOKEN_START = "Bearer ";

accountsRouter.get("/", async (req, res) => {
  let token = req.headers.authorization;

  if (!token?.startsWith(TOKEN_START)) {
    return res
      .status(403)
      .send({ error: "Tokens is not a valid Bearer token" })
      .end();
  }

  token = token.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, jwtSecret);
    const id = payload.id;

    const con = await mysql.createConnection(MSQL_CONFIG);

    const [result] = await con.execute(
      `SELECT users.id, full_name, group_id, user_id, name FROM accounts INNER JOIN users_groups ON users_groups.id = accounts.group_id INNER JOIN users ON accounts.user_id = users.id WHERE users.id = ${id}`
    );

    await con.end();

    res.send(result).end();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ msg: "User unauthorised" }).end();
    }
    res.status(500).send({ error }).end();
    console.error(error);
  }
});

accountsRouter.post("/", async (req, res) => {
  const group_id = +mysql.escape(req.body.group_id).replaceAll("'", "");
  let token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .send({ error: "Please login to create account" })
      .end();
  }

  token = token.replace("Bearer ", "");

  const payload = jwt.verify(token, jwtSecret);
  const id = payload.id;

  const query = `INSERT INTO accounts (group_id, user_id) VALUES ('${group_id}', '${id}')`;
  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    const result = await con.execute(query);

    await con.end();

    res.send({ msg: "Account successfully created", result }).end();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ msg: "User unauthorised" }).end();
    }
    res.status(500).send({ error }).end();
    console.error(error);
  }
});
