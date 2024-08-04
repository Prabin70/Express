import { Router } from "express";
import {
  createDepartmentController,
  readAllDepartment,
} from "../controller/departmentController.js";

let departmentRouter = Router();
departmentRouter.route("/").post(createDepartmentController);
departmentRouter.route("/").get(readAllDepartment);
export default departmentRouter;
