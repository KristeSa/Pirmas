import express from "express";
import { renderHome } from "./backend/modules/renderHome.js";

const app = express();

const PORT = 5_007;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", renderHome);

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
