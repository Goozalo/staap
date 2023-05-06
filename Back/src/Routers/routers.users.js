import { Router } from "express";
import { login, register } from "../controllers/controllers.users.js";

export const routerUser = Router();

routerUser.post("/login", login);
routerUser.post("/register", register);
