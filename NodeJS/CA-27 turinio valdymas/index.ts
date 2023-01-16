import express from "express";
import mysql from "mysql2/promise";
import {MSQL_CONFIG} from "./config"
import {PORT} from "./config"
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors(), express.json());

app.get("/names", (_, res)=>{
    axios
    .get("http://randomuser.me/api/")
    .then(async (response)=>{
        const firstName = response.data.results[0].name.first;

        try{
            const con = await mysql.createConnection(MSQL_CONFIG)
            const query = "SELECT * FROM names"
            const insertName = `INSERT INTO names (name) VALUES ('${firstName}')`
        

        await con.execute(insertName)
        const [names] = await con.execute(query)
        await con.end()

        res.send(names).end()
    }catch (error) {
        res.status(500).send({error}).end()
        return console.error(error)
    }
    })
    .catch((error)=>{
        res.status(500).send({error}).end()
        return console.error(error)
    })
})

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));