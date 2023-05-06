import express from "express";
import "dotenv/config";
import "../DB/connection.js";
import { routerData } from "./Routers/routers.data.js";
import { routerUser } from "./Routers/routers.users.js";

const app = express();
app.use(express.json());
app.use(routerData, routerUser);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Conexión en http://localhost:" + PORT);
});
