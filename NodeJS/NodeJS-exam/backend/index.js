import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import { userRouter } from "./src/routes/auth.js";
import { groupsRouter } from "./src/routes/groups.js";
import { accountsRouter } from "./src/routes/accounts.js";
import { billsRouter } from "./src/routes/bills.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth/", userRouter);
app.use("/groups", groupsRouter);
app.use("/accounts", accountsRouter);
app.use("/bills/", billsRouter);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
