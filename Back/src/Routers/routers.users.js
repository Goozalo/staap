import { Router } from "express";
import { add, login, register } from "../controllers/controllers.users.js";

export const routerUser = Router();

routerUser.post("/user/login", login);
routerUser.post("/user/register", register);
routerUser.post("/user/add/:id", add);
