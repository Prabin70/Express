import { Router } from "express";
import { createDepartmentController } from "../controller/departmentController.js";

let departmentRouter = Router();
departmentRouter.route("/").post(createDepartmentController);
export default departmentRouter;
