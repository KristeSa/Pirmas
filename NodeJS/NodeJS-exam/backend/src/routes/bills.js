import { Router } from "express";
import mysql from "mysql2/promise";
import { jwtSecret, MSQL_CONFIG } from "../../config.js";
import jwt from "jsonwebtoken";

export const billsRouter = Router();

billsRouter.get("/groupId/:group_id", async (req, res) => {
  const group_id = +mysql.escape(req.params.group_id).replaceAll("'", "");
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
      `SELECT bills.id, group_id, name, amount, description FROM bills INNER JOIN users_groups ON bills.group_id = users_groups.id WHERE bills.group_id = ${group_id}`
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

billsRouter.post("/", async (req, res) => {
  const group_id = +mysql.escape(req.body.group_id).replaceAll("'", "");
  const amount = +mysql.escape(req.body.amount).replaceAll("'", "");
  const description = mysql.escape(req.body.description);
  const accessToken = req.headers.authorization?.split(" ")[1];

  let payload = null;

  if (!group_id || typeof group_id !== "number") {
    return res
      .status(400)
      .send({ error: `Group Id ${group_id} doesn't exist` })
      .end();
  }

  if (!amount || typeof amount !== "number") {
    return res.status(400).send({ error: `Please insert right amount` }).end();
  }

  if (!description || typeof description !== "string") {
    return res
      .status(400)
      .send({ error: `Please add right description` })
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

    const result = await con.execute(
      `INSERT INTO bills (group_id, amount, description) VALUES (${group_id}, '${amount}', ${description})`
    );

    await con.end();

    res.send({ msg: "Bill successfully created", result }).end();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ msg: "User unauthorised" }).end();
    }
    res.status(500).send({ error }).end();
    console.error({ error });
  }
});
