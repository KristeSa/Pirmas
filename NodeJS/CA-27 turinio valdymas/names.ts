import { config } from "dotenv";
config();

import express from "express";
import mysql from "mysql2/promise";


const MSQL_CONFIG = {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: +process.env.port,
  };

export const getRandomName = async (req, res) ={
const userName = req.body.name.first

try {
   
}

}


export const getNames = async (_, res) => {
    const query = "SELECT * FROM names";

    try {
        const con = await mysql.createConnection(MSQL_CONFIG);

        const result = (await con.execute(query))[0]

        await con.end()
    
   res.status(201).send(result).end();
} catch (error) {
    res.status(500).send({error}).end()
 console.error(error)
}
}