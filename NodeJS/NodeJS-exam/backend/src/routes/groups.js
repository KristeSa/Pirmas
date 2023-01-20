import { Router } from "express";
import mysql from "mysql2/promise";
import { MSQL_CONFIG, jwtSecret } from "../../config.js";
import jwt from "jsonwebtoken";

export const groupsRouter = Router();

groupsRouter.get("/", async (_, res) => {
  const query = `SELECT * FROM users_groups`;

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);
    const [result] = await con.execute(query);
    await con.end();

    res.send(result).end();
  } catch (error) {
    console.error(error);
  }
});

groupsRouter.get("/:groups-id", async (req, res) => {
  const id = +req.params.id;

  const query = `SELECT * FROM users_groups WHERE id = ${id}`;

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);
    const [result] = await con.execute(query);
    await con.end();

    res.send(result).end();
  } catch (error) {
    console.error(error);
  }
});

groupsRouter.post("/", async (req, res) => {
  const { name } = req.body;
  let token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .send({ error: "Please log in to create new group" })
      .end();
  }

  token = token.replace("Bearer ", "");

  const payload = jwt.verify(token, jwtSecret);
  const query = `INSERT INTO users_groups (name) VALUES ('${name}')`;
  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    const result = await con.execute(query);

    await con.end();

    res.send({ msg: "Group successfully created", result }).end();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ msg: "User unauthorised" }).end();
    }
    res.status(500).send({ error }).end();
    console.error(error);
  }
});
