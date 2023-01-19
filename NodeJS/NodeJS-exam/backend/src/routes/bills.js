import { Router } from "express";
import mysql from "mysql2/promise";
import { MSQL_CONFIG } from "../../config.js";

export const billsRouter = Router();

billsRouter.get("/:group_id", async (req, res) => {
  const group_id = +mysql.escape(req.params.group_id).replaceAll("'", "");

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    const [result] = await con.execute(
      `SELECT group_id, name, amount, description FROM bills INNER JOIN users_groups ON bills.group_id = users_groups.id WHERE bills.group_id = '${group_id}'`
    );

    await con.end();

    res.send(result).end();
  } catch (error) {
    console.error(error);
  }
});

billsRouter.post("/", async (req, res) => {
  const group_id = +mysql.escape(req.body.group_id).replaceAll("'", "");
  const amount = +mysql.escape(req.body.amount).replaceAll("'", "");
  const description = mysql.escape(req.body.description.trim());

  const query = `INSERT INTO bills (group_id, amount, description) VALUES ('${group_id}', '${amount}', ${description})`;
  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    const result = await con.execute(query);

    await con.end();

    res.send({ msg: "Bill successfully created", result }).end();
  } catch (error) {
    console.error(error);
  }
});
