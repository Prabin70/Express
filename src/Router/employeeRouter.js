import { Router } from "express";
import { createEmployeeController } from "../controller/employeeController.js";

const createEmployeeRouter = Router();

createEmployeeRouter.route("/").post(createEmployeeController);

export default createEmployeeRouter;
