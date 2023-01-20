import { Router } from "express";
import mysql from "mysql2/promise";
import { MSQL_CONFIG } from "../../config.js";

export const billsRouter = Router();

billsRouter.get("/", async (_, res) => {
  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    const [result] = await con.execute(`SELECT * FROM bills`);

    await con.end();

    res.send(result).end();
  } catch (error) {
    console.error(error);
  }
});

billsRouter.get("/:group_id", async (req, res) => {
  const group_id = +mysql.escape(req.body.group_id).replaceAll("'", "");

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    const [result] = await con.execute(
      `SELECT group_id, name, amount, description FROM bills INNER JOIN users_groups ON bills.group_id = users_groups.id WHERE group_id = '${group_id}'`
    );

    await con.end();

    res.send(result).end();
  } catch (error) {
    console.error(error);
  }
});

billsRouter.post("/", async (req, res) => {
  const group_id = +mysql.escape(req.body?.group_id).replaceAll("'", "");
  const amount = +mysql.escape(req.body.amount).replaceAll("'", "");
  const description = mysql.escape(req.body.description);

  if (!group_id || typeof group_id !== "number" || Number.isNan) {
    return res.status(400).send(`Group Id ${group_id} doesn't exist`).end();
  }

  if (!amount || typeof amount !== "number") {
    return res.status(400).send(`Please insert right amount`).end();
  }

  if (!description || typeof description !== "string") {
    return res.status(400).send(`Please add right description`).end();
  }

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    const result = await con.execute(
      `INSERT INTO bills (group_id, amount, description) VALUES (${group_id}, '${amount}', ${description})`
    );

    await con.end();

    res.send({ msg: "Bill successfully created", result }).end();
  } catch (error) {
    console.error(error);
  }
});
