import { Router } from "express";
import {
  createTeacherController,
  deleteTeacher,
  readAllCreateTeacherController,
  readSpecificTeacher,
  updateTeacher,
} from "../controller/teacherController.js";

let teacherRouter = Router();
teacherRouter.route("/").post(createTeacherController);
export default teacherRouter;

teacherRouter.route("/").get(readAllCreateTeacherController);
teacherRouter.route("/:id").get(readSpecificTeacher);
teacherRouter.route("/:id").patch(updateTeacher);
teacherRouter.route("/:id").delete(deleteTeacher);
