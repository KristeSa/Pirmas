import express from "express";
import mysql from "mysql2/promise";
import { MSQL_CONFIG } from "../../config.js";
import { isLoggedIn } from "../../middleware.js";

const router = express.Router();

export const loggedUserContent = async (req, res) => {
  const query = "SELECT * FROM articles";

  if (!isLoggedIn) {
    return res.status(401).send({ error: "Please log in to see content" });
  }

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
