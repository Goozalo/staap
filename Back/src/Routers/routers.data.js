import { Router } from "express";
import {
  readData,
  createData,
  deleteData,
  addNewData,
} from "../controllers/controller.data.js";

export const routerData = Router();

routerData.get("/:id", readData);
// routerData.post("/:id", createData);
routerData.delete("/:id", deleteData);
routerData.post("/:id", addNewData);
