import express from "express";
import mysql from "mysql2/promise";
import { MSQL_CONFIG } from "../../config.js";

const router = express.Router();

export const countUsers = async (req, res) => {
  const query = "SELECT COUNT (id) FROM users";

  try {
    const con = await mysql.createConnection(MSQL_CONFIG);

    const result = (await con.execute(query))[0];

    await con.end();

    res.status(201).send(result).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    console.error(error);
  }
};

export default router;
