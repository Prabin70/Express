import { Router } from "express";
import {
  createEmployeeController,
  readAllEmployee,
  updateEmployee,
} from "../controller/employeeController.js";

const createEmployeeRouter = Router();

createEmployeeRouter.route("/").post(createEmployeeController);
createEmployeeRouter.route("/").get(readAllEmployee);
createEmployeeRouter.route("/:id").patch(updateEmployee);

export default createEmployeeRouter;
