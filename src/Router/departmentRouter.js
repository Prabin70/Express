import { Router } from "express";
import {
  createDepartmentController,
  deleteDepartment,
  readAllDepartmentsController,
  readSpecificDepartment,
  updateDepartment,
} from "../controller/departmentController.js";

let departmentRouter = Router();
departmentRouter.route("/").post(createDepartmentController);
departmentRouter.route("/").get(readAllDepartmentsController);

//dynamic route
departmentRouter.route("/:id").get(readSpecificDepartment);
departmentRouter.route("/:id").patch(updateDepartment);
departmentRouter.route("/:id").delete(deleteDepartment);
export default departmentRouter;
