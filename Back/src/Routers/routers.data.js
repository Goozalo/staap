import { Router } from "express";
import { readData, createData } from "../controllers/controller.data.js";

export const routerData = Router();

routerData.get("/", readData);
routerData.post("/", createData);
