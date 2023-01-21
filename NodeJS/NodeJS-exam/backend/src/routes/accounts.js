import { Router } from "express";
import mysql from "mysql2/promise";
import { MSQL_CONFIG, jwtSecret } from "../../config.js";
import jwt from "jsonwebtoken";

export const accountsRouter = Router();

accountsRouter.get("/", async (req, res) => {
  const accessToken = req.headers.authorization;
  let payload = [];

  if (!accessToken) {
    return res.status(401).send({ error: "Login to see groups" }).end();
  }

  payload = jwt.verify(accessToken.replace("Bearer ", ""), jwtSecret);
  const id = payload.id;

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    const [result] = await con.execute(
      `SELECT users.id, full_name, group_id, user_id, name FROM accounts INNER JOIN users_groups ON users_groups.id = accounts.group_id INNER JOIN users ON accounts.user_id = users.id WHERE users.id = ${id} ORDER BY accounts.group_id`
    );

    await con.end();

    res.send(result).end();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ error: "User unauthorised" }).end();
    }

    res.status(500).send({ error }).end();
    console.error({ error });
  }
});

accountsRouter.post("/", async (req, res) => {
  const group_id = +mysql.escape(req.body.group_id).replaceAll("'", "");
  const accessToken = req.headers.authorization?.split(" ")[1];

  let payload = null;

  if (!group_id || typeof group_id !== "number" || Number.isNan) {
    return res
      .status(400)
      .send({ error: `Please provide proper Group Id` })
      .end();
  }

  if (!accessToken) {
    return res
      .status(401)
      .send({ error: "Please login to create account" })
      .end();
  }

  payload = jwt.verify(accessToken.replace("Bearer ", ""), jwtSecret);
  const id = payload.id;

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    const [groupIDExists] = await con.execute(
      `SELECT * FROM users_groups WHERE id = ${group_id}`
    );

    if (!groupIDExists.length) {
      return res.status(400).send({ error: "Group Id does not exists" }).end();
    }

    const result = await con.execute(
      `INSERT INTO accounts (group_id, user_id) VALUES ('${group_id}', '${id}')`
    );

    await con.end();

    res.send({ msg: "Account successfully created", result }).end();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ msg: "User unauthorised" }).end();
    }
    res.status(500).send({ error }).end();
    console.error({ error });
  }
});
