import { Router } from "express";
import {
  createTeacherController,
  readAllCreateTeacherController,
} from "../controller/teacherController.js";

let teacherRouter = Router();
teacherRouter.route("/").post(createTeacherController);
export default teacherRouter;

teacherRouter.route("/").get(readAllCreateTeacherController);
