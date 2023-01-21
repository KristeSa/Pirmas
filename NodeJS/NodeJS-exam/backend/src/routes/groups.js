import { Router } from "express";
import mysql from "mysql2/promise";
import { MSQL_CONFIG, jwtSecret } from "../../config.js";
import jwt from "jsonwebtoken";

export const groupsRouter = Router();

groupsRouter.get("/", async (_, res) => {
  try {
    const con = await mysql.createConnection(MSQL_CONFIG);
    const [result] = await con.execute(`SELECT * FROM users_groups`);
    await con.end();

    res.send(result).end();
  } catch (error) {
    console.error({ error });
  }
});

groupsRouter.get("/groupId/:groups-id", async (req, res) => {
  const id = +mysql.escape(req.params.id).replaceAll("'", "");

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);
    const [result] = await con.execute(
      `SELECT * FROM users_groups WHERE id = ${id}`
    );
    await con.end();

    res.send(result).end();
  } catch (error) {
    console.error({ error });
  }
});

groupsRouter.post("/", async (req, res) => {
  const { name } = req.body;
  const accessToken = req.headers.authorization?.split(" ")[1];

  let payload = [];

  if (!accessToken) {
    return res
      .status(401)
      .send({ error: "Please log in to create new group" })
      .end();
  }

  payload = jwt.verify(accessToken.replace("Bearer ", ""), jwtSecret);

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    const result = await con.execute(
      `INSERT INTO users_groups (name) VALUES ('${name}')`
    );

    await con.end();

    res.send({ msg: "Group successfully created", result }).end();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ error: "User unauthorised" }).end();
    }

    res.status(500).send({ error }).end();
    console.error({ error });
  }
});
